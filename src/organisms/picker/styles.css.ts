import { styled } from 'linaria/react';

interface Props {
  isSelected: boolean;
  onClick: () => void;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 288px;
  padding: 1rem 1rem;
  background: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  transition: 0.3s;
`;

export const Variants = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Variant = styled.div`
  padding: 0.5rem 1rem;
  min-width: 42px;
  text-align: center;
  border: 1px solid #eee;
  border-radius: 10px;

  background: ${({ isSelected }: Props) => (isSelected ? '#eee' : '')};
  cursor: pointer;

  &:hover {
    background: #eee;
  }
`;

export const Label = styled.label`
  margin-bottom: 0.8rem;
  color: #888;

  font-size: 0.8rem;
`;
