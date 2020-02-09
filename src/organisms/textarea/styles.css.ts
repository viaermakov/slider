import { styled } from 'linaria/react';

interface Props {
  isError?: boolean;
  className: string;
}

export const Container = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  background: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  transition: 0.3s;

  border: ${({ isError }: Props) => (isError ? ' 1px solid red' : 'none')};

  :hover {
    background-color: #eee;
    textarea {
      background-color: #eee;
    }
  }
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

  padding: 4px 0;
  border: none;
  border-radius: 10px;
  color: #283f51;

  font-size: 1rem;
  text-overflow: ellipsis;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI';
  transition: 0.3s;

  &:disabled {
    cursor: not-allowed;
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

export const Label = styled.label`
  color: #888;

  font-size: 0.8rem;
`;
