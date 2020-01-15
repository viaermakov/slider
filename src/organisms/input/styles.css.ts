import { styled } from 'linaria/react';

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}
export const Container = styled.div`
  width: 100%;
`;

export const Input = styled.input<Props>`
  z-index: 2;
  position: relative;
  width: 100%;
  height: 48px;
  resize: none;
  box-sizing: border-box;
  appearance: none;

  ::placeholder {
    color: #212121;
  }

  margin: 0.5rem 0;
  padding: 8px 12px;
  border: ${({ isError }) => (isError ? ' 1px solid red' : 'none')};
  border-radius: 4px;
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

export const Label = styled.label``;
