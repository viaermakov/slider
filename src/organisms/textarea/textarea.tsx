import * as React from 'react';
import { Container, TextArea, Label } from './styles.css';

export interface ITextareaProps {
  onFocus?: (e: React.FormEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FormEvent<HTMLTextAreaElement>) => void;
  required: boolean;
  name: string;
  label?: string;

  register: Function;
  onChange?: (e: React.FormEvent<HTMLTextAreaElement>) => void;
  isError: boolean;
  placeholder?: string;
}

const TextareaСomponent: React.FC<ITextareaProps> = ({
  onBlur,
  onFocus,
  onChange,
  isError,
  register,
  name,
  placeholder,
  required,
  label,
}) => {
  const [rows, setRows] = React.useState<number>(4);

  const handleFocus = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    setRows(8);
    onFocus && onFocus(e);
  };

  const handleBlur = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    setRows(4);
    onBlur && onBlur(e);
  };

  const handleChange = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    onChange && onChange(e);
  };

  return (
    <Container className="field" isError={isError}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <TextArea
        placeholder={placeholder}
        rows={rows}
        maxLength={150}
        ref={register({ required })}
        name={name}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Container>
  );
};
export default TextareaСomponent;
