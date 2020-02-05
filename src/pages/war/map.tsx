import * as React from 'react';

import { countries as countriesData, ICountry, countries } from './countries';

import SvgMap from './svgMap';
import { Container, Tooltip, Title, Square, Feed, FeedItem } from './styles.css';
import { useAnimationFrame } from './hooks';
import { getDiffieHellman } from 'crypto';

interface IDictionaryCountry {
  name: string;
  code: string;
  enemies: Array<string>;
  protectorate: Array<string>;
  power: number;
  independent: boolean;
  color: string;
  part: string;
}

const filledCountries: IDictionaryCountry[] = countries.map(item => ({
  ...item,
  protectorate: [],
  enemies: [],
  power: 100,
  color: getRandomColor(),
  independent: true,
  part: '',
}));

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

const getEnemy = (country: IDictionaryCountry, newCountries: IDictionaryCountry[]): number => {
  const isReadyToWar = country.enemies.length > 0 && country.enemies.length < 3;
  const noEnemies = country.enemies.length === 0;
  const amountAll = getRandom(0, newCountries.length - 1);
  if (noEnemies) {
    country.enemies.push(newCountries[amountAll].name);
    newCountries[amountAll].enemies.push(country.name);
    return amountAll;
  }

  const amountEnemies = getRandom(0, country.enemies.length - 1);
  const indexLast = newCountries.findIndex(item => item.name === country.enemies[amountEnemies]);
  if (!isReadyToWar) {
    return indexLast;
  }
  const startNewWar = getRandom(0, 1) === 1;

  if (startNewWar) {
    country.enemies.push(newCountries[amountAll].name);
    newCountries[amountAll].enemies.push(country.name);
    return amountAll;
  }
  return indexLast;
};

interface IEvent {
  winner: IDictionaryCountry;
  type: 'take' | 'take_dominion';
  loser: IDictionaryCountry;
  dominion?: IDictionaryCountry;
}
interface IReturnedDataOfYear {
  countries: IDictionaryCountry[];
  events: IEvent[];
}

const startEventsOfYear = (newCountries: IDictionaryCountry[]): IReturnedDataOfYear => {
  const events: IEvent[] = [];
  for (const country of newCountries) {
    const attack = getRandom(1, 120);
    // const defendedCountry = getEnemy(country, newCountries);
    const defendedCountry = getRandom(0, newCountries.length - 1);

    console.log(defendedCountry);
    const defPower = newCountries[defendedCountry].power || 10;
    const defProtectorate = newCountries[defendedCountry].protectorate || [];

    if (country.name === newCountries[defendedCountry].name) {
      continue;
    }
    if (!newCountries[defendedCountry].independent || !country.independent) {
      continue;
    }

    if (attack > 100) {
      if (defProtectorate.length > 0) {
        const last = defProtectorate.length - 1;
        const indexLast = newCountries.findIndex(item => item.name === defProtectorate[last]);

        country.protectorate = [...country.protectorate, defProtectorate[last]];
        // country.power += Math.round(newCountries[defendedCountry].power / 10);
        // country.power -= country.protectorate.length * 5;

        newCountries[indexLast].independent = false;
        newCountries[indexLast].part = country.name;
        newCountries[indexLast].color = country.color;

        newCountries[defendedCountry].protectorate.splice(last, 1);
        // newCountries[defendedCountry].power -= 10;

        events.push({
          winner: country,
          type: 'take_dominion',
          loser: newCountries[defendedCountry],
          dominion: newCountries[indexLast],
        });
        continue;
      }

      // const idxEnemy = country.enemies.findIndex(
      //   item => item === newCountries[defendedCountry].name,
      // );

      // const idxEnemy2 = newCountries[defendedCountry].enemies.findIndex(
      //   item => item === country.name,
      // );

      // newCountries[defendedCountry].enemies.splice(idxEnemy2 - 1, 1);
      // country.enemies.splice(idxEnemy - 1, 1);
      country.protectorate = [...country.protectorate, newCountries[defendedCountry].name];
      // country.power += newCountries[defendedCountry].power;

      newCountries[defendedCountry].color = country.color;
      // newCountries[defendedCountry].power = 0;
      newCountries[defendedCountry].independent = false;
      newCountries[defendedCountry].part = country.name;

      events.push({
        winner: country,
        type: 'take',
        loser: newCountries[defendedCountry],
      });
    } else {
      if (country.protectorate.length > 0) {
        const last = country.protectorate.length - 1;
        const indexLast = newCountries.findIndex(item => item.name === country.protectorate[last]);

        newCountries[defendedCountry].protectorate = [
          ...defProtectorate,
          country.protectorate[last],
        ];
        // newCountries[defendedCountry].power += Math.round(country.power / 10);
        // newCountries[defendedCountry].power -= getDiffieHellman.length * 5;

        newCountries[indexLast].color = newCountries[defendedCountry].color;
        newCountries[indexLast].part = newCountries[defendedCountry].name;
        newCountries[indexLast].independent = false;

        country.protectorate.splice(last, 1);
        // country.power -= 10;

        events.push({
          winner: newCountries[defendedCountry],
          type: 'take_dominion',
          loser: country,
          dominion: newCountries[indexLast],
        });
        continue;
      }

      country.color = newCountries[defendedCountry].color;
      country.part = newCountries[defendedCountry].name;
      country.independent = false;

      // const idxEnemy = newCountries[defendedCountry].enemies.findIndex(
      //   item => item === country.name,
      // );
      // const idxEnemy2 = country.enemies.findIndex(
      //   item => item === newCountries[defendedCountry].name,
      // );
      // newCountries[defendedCountry].enemies.splice(idxEnemy - 1, 1);
      // country.enemies.splice(idxEnemy2 - 1, 1);
      newCountries[defendedCountry].protectorate = [...defProtectorate, country.name];

      events.push({
        winner: newCountries[defendedCountry],
        type: 'take',
        loser: country,
      });
    }
  }

  return { countries: newCountries, events };
};

const Map: React.FC = () => {
  const [positionX, setPositionX] = React.useState<number>(0);
  const [positionY, setPositionY] = React.useState<number>(0);
  const [country, setCountry] = React.useState<IDictionaryCountry | null>(null);

  const [time, setTime] = React.useState<number>(0);
  const [topCountries, setTopCountries] = React.useState<IDictionaryCountry[]>([]);
  const [countries, setCountries] = React.useState<IDictionaryCountry[]>(filledCountries);
  const [events, setEvents] = React.useState<IEvent[]>([]);

  useAnimationFrame(() => {
    setTime(prevCount => prevCount + 1);
  });

  React.useEffect(() => {
    // if (time % 50 !== 0) {
    //   return;
    // }

    const generateStyles = (data: ICountry[]): void => {
      data.forEach((country: ICountry): void => {
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

    const annexedCountries = countries.filter(item => item.independent === false);

    if (annexedCountries.length === countries.length - 1) {
      return;
    }

    const { countries: newCountries, events } = startEventsOfYear(countries);
    const topCountries = [...newCountries].sort(
      (a, b) => b.protectorate.length - a.protectorate.length,
    );

    generateStyles(newCountries);
    setEvents(events);
    setCountries(newCountries);
    setTopCountries(topCountries);
  }, [countries, time]);

  const handleMouseEnter = (e: React.MouseEvent<SVGElement>): void => {
    const currentCountry = (e.target as SVGElement).getAttribute('data-title') || '';
    const country = countries.find(item => item.name === currentCountry) || null;
    setCountry(country);
    setPositionX(e.pageX);
    setPositionY(e.pageY);
  };

  const renderEvents = (): React.ReactElement => (
    <Feed>
      {events.map((event: IEvent) => {
        const { type, winner, loser } = event;
        if (type === 'take') {
          return (
            <FeedItem color="red">
              {time} day:
              {winner.name} сonquer {loser.name}
            </FeedItem>
          );
        }

        const { dominion } = event;

        return (
          <FeedItem>
            {time} day:
            {winner.name} сonquered {dominion!.name} from {loser.name}
          </FeedItem>
        );
      })}
    </Feed>
  );

  const renderEnemies = (): React.ReactElement | null => {
    if (!country) {
      return null;
    }
    return (
      <div>
        {country.enemies.map(item => (
          <span>{item},</span>
        ))}
      </div>
    );
  };

  return (
    <Container>
      <SvgMap onMouseOver={handleMouseEnter} />
      {topCountries.length > 0 && (
        <Tooltip style={{ left: 20, top: 20 }}>
          {topCountries.slice(0, 10).map(country => (
            <Title>
              {country.name} - {country.protectorate.length}
              <div> Enemies: {renderEnemies}</div>
              <Square color={country.color}></Square>
            </Title>
          ))}
        </Tooltip>
      )}
      {country && (
        <Tooltip style={{ left: positionX + 20, top: positionY + 20 }}>
          <Title>
            {country.name}
            {country.part
              ? ` belongs to ${country.part}`
              : ` independent with ${country.protectorate.length} dominions`}
          </Title>
        </Tooltip>
      )}
      {renderEvents()}
    </Container>
  );
};

export default Map;
