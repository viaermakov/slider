import { styled } from 'linaria/react';

export const Navigation = styled.div`
  margin: 32px 0;

  a {
    font-size: 1.8rem;
    color: #888;
    text-decoration: none;
  }
`;

export const PinkArrow = styled.span`
  color: #ef4c44;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem 20%;
  color: #212121;

  @media screen and (max-width: 1332px) {
    margin: 2rem 8%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  .field {
    margin: 1rem 0;

    &:nth-child(5),
    &:nth-child(6) {
      margin: 0;
    }
    &:nth-child(5) {
      margin-top: 1rem;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:nth-child(6) {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
`;

export const Basic = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  border-radius: 10px;

  .input {
    margin: 1rem 0;
  }
`;

export const Title = styled.div`
  height: 60px;
  width: 100%;
  font-size: 2rem;
`;
