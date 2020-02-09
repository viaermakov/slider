import { styled } from 'linaria/react';

interface Props {
  type: 'full' | 'simple';
}

export const Title = styled.h1`
  color: red;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem 20%;
  color: #212121;

  @media screen and (max-width: 1332px) {
    margin: 2rem 8%;
  }
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

export const Preview = styled.div`
  position: relative;
  height: 512px;
`;
