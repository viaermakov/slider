import * as React from 'react';

import { countries as countriesData, gradations, ICountry } from './countries';

import SvgMap from './svgMap';
import { Container, Tooltip, Title, Text } from './styles.css';
import { useAnimationFrame } from './hooks';

const URL = 'https://en.wikipedia.org/api/rest_v1/page/html/2019–20_Wuhan_coronavirus_outbreak';
const OFFSET = 20;

interface IDictionaryCountry {
  name: string;
  code: string;
  enemies: Array<string>;
  protectorate: Array<string>;
  power: number;
  independent: boolean;
}
interface INameToValueMap {
  [key: string]: IDictionaryCountry;
}

const countriesOb: INameToValueMap = countriesData.reduce(
  (acc: INameToValueMap, item): INameToValueMap => {
    item.protectorate = [];
    item.power = 10;
    acc[item.name] = item;
    return acc;
  },
  {},
);

function getRandom(min: number, max: number): number {
  // получить случайное число от (min-0.5) до (max+0.5)
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function getRandomColor(): string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
countriesData.forEach(c => {
  c.color = getRandomColor();
});
const Map: React.FC = () => {
  const [positionX, setPositionX] = React.useState<number>(0);
  const [positionY, setPositionY] = React.useState<number>(0);
  const [time, setTime] = React.useState<number>(0);

  const [country, setCountry] = React.useState<string>('');
  const [countries, setCountries] = React.useState<ICountry[]>(countriesData);

  useAnimationFrame(() => {
    // if (time > 0) {
    // setTime(prevCount => (prevCount + 60 * 0.01) % 100);
    // console.log(countries.filter(item => item.independent === false).length);
    // }
  });

  React.useEffect(() => {
    const generateStyles = (data: ICountry[]): void => {
      data.forEach((country: string): void => {
        if (!country.code || !country.code) {
          return;
        }
        const currentPath = document.querySelector(`.${country.code}`) as HTMLElement;
        if (!currentPath) {
          return;
        }
        currentPath.style.fill = country ? country.color : '';
      });
    };

    const newCountries = countries;

    if (
      newCountries.filter(item => item.independent === false).length ===
      newCountries.length - 1
    ) {
      console.log('===');
      return;
    }
    console.log(newCountries.length);
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let idx = 0; idx < newCountries.length; idx++) {
      const country: ICountry = newCountries[idx];
      const attack = getRandom(1, 10);
      const defendedCountry = getRandom(0, newCountries.length - 1);

      console.log(idx);
      const defPower = newCountries[defendedCountry].power || 10;
      const defProtectorate = newCountries[defendedCountry].protectorate || [];

      if (country.name === newCountries[defendedCountry].name) {
        console.log('===');
        break;
      }

      console.log(newCountries[defendedCountry], country.independent);

      const allIndependent =
        newCountries[defendedCountry].independent === false || country.independent === false;
      if (allIndependent) {
        break;
      }

      // if (attack > defPower) {
      //   if (defProtectorate.length > 0) {
      //     const last = defProtectorate.length - 1;
      //     country.protectorate = [...country.protectorate, defProtectorate[last]];
      //     newCountries[defendedCountry].color = country.color;
      //     defProtectorate.splice(last - 1, 1);
      //     break;
      //   }
      //   newCountries[defendedCountry].color = country.color;
      //   country.protectorate = [...country.protectorate, newCountries[defendedCountry].name];
      //   newCountries[defendedCountry].independent = false;
      // } else {
      //   if (country.protectorate.length > 0) {
      //     const last = country.protectorate.length - 1;
      //     newCountries[defendedCountry].protectorate = [
      //       ...defProtectorate,
      //       country.protectorate[last],
      //     ];
      //     country.color = newCountries[defendedCountry].color;

      //     country.protectorate.splice(last - 1, 1);
      //     break;
      //   }
      //   country.color = country.color;
      //   newCountries[defendedCountry].protectorate = [...defProtectorate, country.name];
      //   country.independent = false;
      // }
    }
    generateStyles(newCountries);
    setCountries(newCountries);
  }, [countries]);

  const handleMouseEnter = (e: React.MouseEvent<SVGElement>): void => {
    const currentCountry = (e.target as SVGElement).getAttribute('data-title') || '';
    setCountry(currentCountry);
    setPositionX(e.pageX);
    setPositionY(e.pageY);
  };

  return (
    <Container>
      <SvgMap onMouseOver={handleMouseEnter} />
      {true && (
        <Tooltip style={{ left: positionX + OFFSET, top: positionY + OFFSET }}>
          <Title>{country}</Title>
        </Tooltip>
      )}
    </Container>
  );
};

export default Map;
