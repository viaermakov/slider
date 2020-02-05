import { styled } from 'linaria/react';

export const Container = styled.div`
  margin: 2rem 20%;

  svg {
    fill: #383d45;
  }

  path {
    &:hover {
      fill: red;
    }
  }
`;

export const Tooltip = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 4px 8px;
  color: #000;
  border-radius: 4px;
  width: 220px;
  background: #545456;
  color: #eee;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  font-size: 1rem;
`;

export const Square = styled.div`
  height: 10px;
  width: 10px;
  background: ${({ color }) => `${color}`};
`;

export const Feed = styled.div`
  position: absolute;
  top: 70%;
  left: 16px;
`;

export const FeedItem = styled.div`
  position: relative;
  width: 100%;
  color: ${({ color }) => `${color}`};
`;
