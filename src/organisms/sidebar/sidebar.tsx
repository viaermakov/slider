import * as React from 'react';
import { UserInfo } from './userInfo';
import { Container } from './styles.css';
import { Menu } from './menu';

const Sidebar: React.FC = (): React.ReactElement => (
  <Container>
    <UserInfo type="simple" />
    <Menu />
  </Container>
);
export default Sidebar;
