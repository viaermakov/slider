import { styled } from 'linaria/react';

export const Container = styled.div`
  width: 100%;
`;

export const TextArea = styled.textarea`
  z-index: 2;
  position: relative;
  width: 100%;
  height: 100%;
  resize: none;
  box-sizing: border-box;
  appearance: none;

  &::-ms-clear {
    display: none;
  }

  ::placeholder {
    color: #212121;
  }

  margin: 1rem 0;
  padding: 8px 12px;
  border: none;
  border-radius: 10px;
  background-color: #f4f4f7;
  color: #283f51;

  font-size: 1rem;
  text-overflow: ellipsis;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI';
  transition: 0.3s;

  &:disabled {
    cursor: not-allowed;
  }

  :hover {
    background-color: #b1b1b3;
  }

  :focus {
    outline: none;

    & ~ .placeholder {
    }
  }

  &:-webkit-autofill {
    z-index: 1;

    ~ .placeholder {
      z-index: 2;
    }
  }
`;
