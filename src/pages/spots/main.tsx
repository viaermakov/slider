import * as React from 'react';
import { Link } from 'react-router-dom';
import { Slider } from 'organisms/slider';
import {
  Container,
  Navigation,
  PinkArrow,
  Boards,
  Board,
  Title,
  Text,
  Details,
  TypeSpot,
  TypeVerify,
  Characters,
  Info,
  Addition,
  Point,
  Map,
  Location,
  Name,
  Desc,
} from './styles.css';
import SvgMap from 'src/pages/map/svgMap';

export interface IMainProps {}

const Main: React.FC<IMainProps> = (): React.ReactElement => {
  const images = ['src/assets/1.jpg', 'src/assets/2.jpg', 'src/assets/3.jpg'];
  return (
    <Container>
      <Navigation>
        <Link to="/">
          <PinkArrow>← </PinkArrow>Spot detail
        </Link>
      </Navigation>
      <Slider images={images} />
      <Details>
        <Characters>
          <TypeSpot type="water">^^^ Surfing</TypeSpot>
          <TypeVerify isVerified={false}>Unverified spot</TypeVerify>
        </Characters>
        <Boards>
          <Board>
            <Title>Spot Name</Title>
            <Text>North Shore's Surf Row</Text>
          </Board>
          <Board>
            <Title>GPS location</Title>
            <Text>48.90176342 N - 16.324325525</Text>
          </Board>
        </Boards>
        <Location>
          <Info>
            <Addition>commercial information</Addition>
            <Name>North Shore's Surf Row</Name>
            <Point>1221 Kilauea Ave, Hilo, HI 96720, United States</Point>
            <Point>+398087673243</Point>
          </Info>
          <Map>
            <SvgMap />
          </Map>
        </Location>
        <Desc>
          <p>
            The state encompasses nearly the entire Hawaiian archipelago, 137 islands spread over
            1,500 miles (2,400 km). The volcanic archipelago is physiographically and ethnologically
            part of the Polynesian subregion of Oceania.
          </p>{' '}
          <p>
            At the southeastern end of the archipelago, the eight main islands are, in order from
            northwest to southeast: Niʻihau, Kauaʻi, Oʻahu, Molokaʻi, Lānaʻi, Kahoʻolawe, Maui, and
            Hawaiʻi. The last is the largest island in the group; it is often called the "Big
            Island" or "Hawaiʻi Island" to avoid confusion with the state or archipelago.
          </p>{' '}
          <p>
            Hawaiʻi is the 8th-smallest geographically and the 11th-least populous, but the
            13th-most densely populated of the 50 states.{' '}
          </p>
          <p>
            It is the only state with an Asian American plurality. Hawaii has more than 1.4 million
            permanent residents, along with many visitors and U.S. military personnel. The state
            capital and largest city is Honolulu on the island of Oʻahu.
          </p>
          <p>
            The state's ocean coastline is about 750 miles (1,210 km) long, the fourth longest in
            the U.S., after the coastlines of Alaska, Florida, and California. Hawaii is the most
            recent state to join the union, on August 21, 1959.[10] It was an independent nation
            until 1898.{' '}
          </p>
        </Desc>
      </Details>
    </Container>
  );
};

export default Main;
