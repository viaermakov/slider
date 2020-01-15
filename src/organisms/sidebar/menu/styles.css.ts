import { styled } from 'linaria/react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const Item = styled.div`
  padding: 12px 8px;
  margin: 1rem auto;

  cursor: pointer;
  transition: 0.3s;

  :hover {
    svg {
      fill: #f7eb22;
    }
  }
`;
