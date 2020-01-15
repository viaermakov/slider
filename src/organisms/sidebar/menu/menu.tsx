import * as React from 'react';

import { Container, Item } from './styles.css';
import { FeedIcon } from 'icons/feedIcon';

export interface ISidebarProps {}

const Menu: React.FC<ISidebarProps> = () => {
  return (
    <Container>
      <Item>
        <FeedIcon />
      </Item>
      <Item>
        <FeedIcon />
      </Item>
    </Container>
  );
};

export default Menu;
