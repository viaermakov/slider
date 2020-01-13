import * as React from 'react';
import { Container, TextArea } from './styles.css';

export interface ITextareaProps {
  onFocus?: (e: React.FormEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FormEvent<HTMLTextAreaElement>) => void;
}

const TextareaСomponent: React.FC<ITextareaProps> = ({ onBlur, onFocus }) => {
  const [value, setValue] = React.useState<string>('');
  const [rows, setRows] = React.useState<number>(2);

  const handleFocus = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setRows(4);
    onFocus && onFocus(e);
  };

  const handleBlur = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setRows(2);
    onBlur && onBlur(e);
  };

  const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <Container>
      <TextArea
        placeholder="Share your trip..."
        rows={rows}
        maxLength={150}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Container>
  );
};
export default TextareaСomponent;
