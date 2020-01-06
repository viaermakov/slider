import { styled } from 'linaria/react';

export const Button = styled.button`
  height: 42px;
  border: none;
  width: 100%;
  border-radius: 5px;
  font-size: 1.3rem;
  font-weight: bold;
  background: #f7eb22;
  font-family: Roboto;

  cursor: pointer;
  :hover {
    background: #d4c80b;
  }
`;
