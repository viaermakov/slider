import { styled } from 'linaria/react';

interface Props {
  width?: number;
  color?: string;
  transform?: number;
  order?: number;
}
// Write your styles in `styled` tag
export const Container = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
  background: #eee;
  cursor: pointer;
`;

export const Cover = styled.div`
  position: relative;
  height: 100%;
  width: ${({ width }: Props) => `${width}px`};
  background: ${({ color }: Props) => `${color}`};
  order: ${({ order }: Props) => `${order}`};
`;

export const Canvas = styled.div`
  display: flex;
  height: 100%;
  transition: 0.3s;
  transform: ${({ transform }: Props) => `translateX(-${transform}px)`};
`;

export const Tabs = styled.div`
  position: absolute;
  display: flex;
  top: 10px;
  width: 50%;

  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

export const Tab = styled.div`
  position: relative;
  z-index: 1;
  margin: 0 4px;
  height: 3px;
  width: 100%;
  background: rgba(102, 103, 120, 1);
  border-radius: 10px;
`;

export const Progress = styled.div`
  position: absolute;
  width: ${({ width }: Props) => `${width}%`};
  height: 100%;
  background: rgba(191, 191, 191, 1);
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
