import { styled } from 'linaria/react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin: 32px 0;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  cursor: pointer;
`;

export const Text = styled.div`
  position: relative;
  padding: 16px 8px;
  font-size: 1.1rem;
`;

export const ActionText = styled.span`
  cursor: pointer;
  color: #f7eb22;
  font-size: 1.1rem;

  :hover {
    color: #d4c80b;
  }
`;
