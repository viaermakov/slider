import { styled } from 'linaria/react';
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  name?: string;
  ref?: Function;
  className?: string;
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
    input {
      background-color: #eee;
    }
  }
`;

export const Input = styled.input<Props>`
  z-index: 2;
  position: relative;
  width: 100%;
  height: 40px;
  resize: none;
  border: none;
  box-sizing: border-box;
  appearance: none;
  transition: 0.3s;

  ::placeholder {
    color: #888;
  }

  padding: 4px 0;
  border-radius: 4px;
  color: #283f51;

  font-size: 1rem;
  text-overflow: ellipsis;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI';

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
