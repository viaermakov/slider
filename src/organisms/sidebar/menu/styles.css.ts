import { styled } from 'linaria/react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const Item = styled.div`
  padding: 12px 8px;
  margin: 8px;
  border-bottom: 1px solid #373131;

  cursor: pointer;

  :hover {
    border-bottom: 1px solid #f7eb22;
  }
`;
