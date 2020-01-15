import * as React from 'react';
import { Container, Input, Label } from './styles.css';

export interface IInputProps {
  required: boolean;
  label?: string;
  name: string;
  register: Function;
  onFocus?: (e: React.FormEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FormEvent<HTMLInputElement>) => void;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  isError: boolean;
  placeholder?: string;
}

const TextareaСomponent: React.FC<IInputProps> = ({
  onBlur,
  onFocus,
  onChange,
  label,
  register,
  required,
  name,
  isError,
  placeholder
}): React.ReactElement => {
  const handleFocus = (e: React.FormEvent<HTMLInputElement>) => {
    onFocus && onFocus(e);
  };

  const handleBlur = (e: React.FormEvent<HTMLInputElement>) => {
    onBlur && onBlur(e);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    onChange && onChange(e);
  };

  return (
    <Container>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Input
        name={name}
        ref={register({ required })}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        isError={isError}
      />
    </Container>
  );
};
export default TextareaСomponent;
