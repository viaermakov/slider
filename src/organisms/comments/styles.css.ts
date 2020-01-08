import { styled } from 'linaria/react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const More = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  margin: 6px 0;

  background: #202020;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background: #383838;
  }
`;
