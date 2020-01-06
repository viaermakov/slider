import * as React from 'react';

import { Container, Logo, Location, Stats, Stat, StatCount, StatTitle } from './styles.css';

export interface ISidebarProps {}

const Sidebar: React.FC<ISidebarProps> = () => {
  return (
    <Container>
      <Logo src="src/assets/1.jpg"></Logo>
      <Location>Moscow, Russia</Location>
      <Stats>
        <Stat>
          <StatCount>177K</StatCount>
          <StatTitle>Followers</StatTitle>
        </Stat>
        <Stat>
          <StatCount>54</StatCount>
          <StatTitle>Countries</StatTitle>
        </Stat>
        <Stat>
          <StatCount>4.8</StatCount>
          <StatTitle>Rating</StatTitle>
        </Stat>
      </Stats>
    </Container>
  );
};

export default Sidebar;
