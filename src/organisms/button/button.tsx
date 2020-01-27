import * as React from 'react';
import { Button } from './styles.css';

export interface IButtonProps extends React.ButtonHTMLAttributes<{}> {
  autoFocus?: boolean;
  className?: string;
  component?: React.ElementType;
  href?: string;
  iconAfter?: React.ReactChild;
  iconBefore?: React.ReactChild;
  isDisabled?: boolean;
  isLoading?: boolean;
  onBlur?: React.FocusEventHandler<HTMLElement>;
  children?: React.ReactNode;
}

const ButtonComponent: React.FC<IButtonProps> = ({ onClick, type = 'submit', children }) => (
  <Button onClick={onClick} type={type}>
    {children}
  </Button>
);

export default ButtonComponent;
