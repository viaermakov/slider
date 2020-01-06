import * as React from 'react';
import { Input } from 'organisms/input';
import { Button } from 'organisms/button';

import { Container, ButtonWrapper } from './styles.css';

export interface ISidebarProps {}

const Sidebar: React.FC = () => {
  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <Container>
      <Input onFocus={handleFocus} onBlur={handleBlur} />
      <ButtonWrapper>{isFocused && <Button onClick={() => {}}>Share</Button>}</ButtonWrapper>
    </Container>
  );
};
export default Sidebar;
