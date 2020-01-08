import { styled } from 'linaria/react';

interface Props {
  color: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 6px 0;
  padding: 0 8px;
  background: #202020;
  border-radius: 10px;
  box-sizing: border-box;
`;

export const Avatar = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 50%;
`;

export const TextBlock = styled.div`
  display: flex;
  padding: 0 8px;
  background: transparent;
`;

export const AuthorText = styled.div`
  padding: 0 4px;
  color: ${({ color }: Props) => `${color}`};

  background: transparent;
  cursor: pointer;

  :hover {
    color: #d4c80b;
  }
`;

export const Text = styled.div`
  padding: 0 4px;
  background: transparent;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin: 6px 0;
  background: transparent;
`;
