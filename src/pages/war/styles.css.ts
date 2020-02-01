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
  width: 120px;
  background: #545456;
  color: #eee;
`;

export const Title = styled.span`
  position: relative;
  font-size: 1rem;
`;

export const Text = styled.span`
  position: relative;
  font-size: 0.9rem;
`;
