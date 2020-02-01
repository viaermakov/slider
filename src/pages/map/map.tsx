import * as React from 'react';

import { countries, gradations } from './countries';

import SvgMap from './svgMap';
import { Container, Tooltip, Title, Text } from './styles.css';

const URL = 'https://en.wikipedia.org/api/rest_v1/page/html/2019–20_Wuhan_coronavirus_outbreak';
const OFFSET = 20;

interface ICountry {
  country: string;
  deaths: number;
  cases: number;
  gradation: number;
}

export interface IDataResponse {
  [key: string]: ICountry;
}

interface IDictionaryCountry {
  name: string;
  code: string;
}
interface INameToValueMap {
  [key: string]: IDictionaryCountry;
}

const countriesOb: INameToValueMap = countries.reduce((acc: INameToValueMap, item) => {
  acc[item.name] = item;
  return acc;
}, {});

const Map: React.FC = () => {
  const [positionX, setPositionX] = React.useState<number>(0);
  const [positionY, setPositionY] = React.useState<number>(0);

  const [country, setCountry] = React.useState<string>('');
  const [data, setData] = React.useState<IDataResponse>({});

  React.useEffect(() => {
    const generateStyles = (data: IDataResponse): void => {
      Object.keys(data).forEach((country: string): void => {
        if (!countriesOb[country] || !countriesOb[country].code) {
          return;
        }
        const currentPath = document.querySelector(`.${countriesOb[country].code}`) as HTMLElement;
        if (!currentPath) {
          return;
        }

        currentPath.style.fill = data[country] ? gradations[data[country].gradation].color : '';
      });
    };

    const parseData = (html: string): IDataResponse | null => {
      const el = document.createElement('html');
      el.innerHTML = html;
      const col = el.querySelectorAll('table.wikitable tbody > tr');

      const data: IDataResponse = {};
      let maxCases = 0;
      for (let i = 1; i < col.length; i++) {
        const rows = col[i].querySelectorAll('td');
        if (rows.length < 3) {
          break;
        }

        let countryNode = rows[0].textContent ? rows[0].textContent.trim() : null;
        if (countryNode === 'Total') {
          break;
        }

        if (countryNode) {
          const cases = rows[1].textContent && rows[1].textContent.replace(',', '');
          const deaths = rows[2].textContent && rows[2].textContent.replace(',', '');

          if (maxCases < Number(cases)) {
            maxCases = Number(cases);
          }

          if (countryNode.includes('China')) {
            countryNode = 'China';
          }
          if (!cases || !deaths) {
            break;
          }

          data[`${countryNode}`] = {
            country: countryNode,
            cases: Number(cases),
            deaths: Number(deaths),
            gradation: 0,
          };
        }
      }
      Object.keys(data).forEach(key => {
        const ratio = data[key].cases / maxCases;
        for (let idx = 1; idx < gradations.length; idx++) {
          if (ratio === 0) {
            break;
          }
          if (ratio < gradations[0].percentage) {
            data[key].gradation = 0;
            break;
          }
          if (ratio > gradations[idx - 1].percentage && ratio < gradations[idx].percentage) {
            data[key].gradation = idx;
            break;
          }
          data[key].gradation = 8;
        }
      });
      return data;
    };

    fetch(URL)
      .then(response => response.text())
      .then(html => {
        const data = parseData(html);
        if (data) {
          setData(data);
          generateStyles(data);
        }
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.error('Failed to fetch page: ', err);
      });
  }, []);

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
          <Text>cases: {data[country] ? data[country].cases : 'NO cases'}</Text>
          <Text>deaths: {data[country] ? data[country].deaths : 'NO dead'}</Text>
        </Tooltip>
      )}
    </Container>
  );
};

export default Map;
