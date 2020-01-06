import * as React from 'react';
import { Button } from './styles.css';

export interface IButtonProps {
  onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const ButtonComponent: React.FC<IButtonProps> = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default ButtonComponent;
