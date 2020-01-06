import * as React from 'react';
import { UserInfo } from './userInfo';
import { Container } from './styles.css';
import { Menu } from './menu';

export interface ISidebarProps {}

const Sidebar: React.FC = () => {
  return (
    <Container>
      <UserInfo />
      <Menu />
    </Container>
  );
};
export default Sidebar;
