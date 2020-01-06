import * as React from 'react';

import { Container, Item } from './styles.css';

export interface ISidebarProps {}

const Menu: React.FC<ISidebarProps> = () => {
  return (
    <Container>
      <Item>Feed</Item>
      <Item>Travel</Item>
    </Container>
  );
};

export default Menu;
