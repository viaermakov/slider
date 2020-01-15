import * as React from 'react';
import { UserInfo } from './userInfo';
import { Container } from './styles.css';
import { Menu } from './menu';

export interface ISidebarProps {}

const Sidebar: React.FC = (): React.ReactElement => {
  return (
    <Container>
      <UserInfo type="simple" />
      <Menu type="simple" />
    </Container>
  );
};
export default Sidebar;
