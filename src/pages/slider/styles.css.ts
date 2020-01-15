import { styled } from 'linaria/react';

interface Props {
  type: 'full' | 'simple';
}

export const Title = styled.h1`
  color: red;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: ${({ type }: Props) =>
    type === 'full' ? '300px 3fr 1fr' : '150px 3fr 1fr'};
  grid-template-rows: 1fr;
  grid-gap: 16px;
  height: 100vh;
`;

export const UserContainer = styled.section`
  position: relative;
  border-right: 1px solid #f7eb22;
  height: 100%;
  width: 100%;
`;

export const Feed = styled.section`
  position: relative;
  width: 100%;
  margin: 16px;
`;

export const Preview = styled.section`
  position: relative;
  height: 512px;
`;
