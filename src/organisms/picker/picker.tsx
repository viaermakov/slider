import * as React from 'react';
import { Container, Label, Variants, Variant } from './styles.css';

export interface IPickerProps {
  className?: string;
  variants: IVariant[];
  label: string;
  onChange: (e: number) => void;
}

export interface IVariantPickerPickerProps {
  onClick: (e: number) => void;
  id: number;
  isSelected: boolean;
}

interface IVariant {
  label: string;
  id: number;
}

const VariantItem: React.FC<IVariantPickerPickerProps> = ({
  id,
  onClick,
  children,
  isSelected,
}) => {
  const handleClick = (): void => {
    onClick(id);
  };
  return (
    <Variant key={id} onClick={handleClick} isSelected={isSelected}>
      {children}
    </Variant>
  );
};

const Picker: React.FC<IPickerProps> = ({ variants, label, onChange }) => {
  const [id, setId] = React.useState<number>(-1);

  const handleClick = (id: number): void => {
    setId(id);
    onChange(id);
  };

  return (
    <Container className="field">
      <Label>{label}</Label>
      <Variants>
        {variants.map((variant: IVariant) => (
          <VariantItem
            key={variant.id}
            id={variant.id}
            onClick={handleClick}
            isSelected={variant.id === id}
          >
            {variant.label}
          </VariantItem>
        ))}
      </Variants>
    </Container>
  );
};

export default Picker;
