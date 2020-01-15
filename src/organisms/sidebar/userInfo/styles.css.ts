import { styled } from 'linaria/react';

interface Props {
  width?: number;
  color?: string;
  transform?: number;
  order?: number;
  small?: boolean;
}
// Write your styles in `styled` tag
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

export const Logo = styled.img`
  border-radius: 20px;
  height: ${({ small }: Props) => (small ? '65px' : '150px')};
  width: ${({ small }: Props) => (small ? '65px' : '150px')};
  margin: 8px 0;
  object-fit: cover;
`;

export const Location = styled.div`
  border: 2px solid #f7eb22;
  border-radius: 5%;
  padding: 8px 16px;
  margin: 8px 0;
`;

export const Canvas = styled.div`
  display: flex;
  height: 100%;
  transition: 0.3s;
  transform: ${({ transform }: Props) => `translateX(-${transform}px)`};
`;

export const Stats = styled.div`
  display: flex;
  margin: 16px 0;
  width: 100%;
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px;
`;

export const StatCount = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`;

export const StatTitle = styled.div`
  color: #7f7d7d;
  font-size: 0.8rem;
`;
