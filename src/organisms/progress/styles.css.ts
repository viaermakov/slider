import { styled } from 'linaria/react';

interface Props {
  value: number;
}
export const Container = styled.div`
  position: relative;
  height: 4px;
  margin: 50px 0;
  display: flex;
  align-items: center;
  transition: all 1s;
`;

export const Bar = styled.div`
  position: absolute;
  height: 100%;
  background: #f7eb22;
  width: ${({ value }: Props) => `${value}%`};
`;

export const Point = styled.div`
  position: relative;
  height: 300%;
  width: 3px;
  bottom: 4px;
  background: #f7eb22;
`;

export const Title = styled.div`
  position: absolute;
  bottom: 16px;
  left: -50px;
  width: 100px;
`;

export const PointBlock = styled.div`
  position: absolute;
  height: 4px;
  left: ${({ value }: Props) => `${value}%`};
`;
