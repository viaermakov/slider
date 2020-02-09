import { styled } from 'linaria/react';

interface SpotTypeProps {
  type: 'water' | 'earth' | 'air';
}
interface VerifiedTypeProps {
  isVerified: boolean;
}

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

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
`;

export const Boards = styled.div`
  display: flex;
  width: 100%;
  margin: 3rem 0;
`;

export const Board = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 2rem);
  margin-right: 2rem;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  background: #fff;

  :last-child {
    margin-right: 0;
  }
`;

export const Title = styled.p`
  color: #888;
  font-size: 0.8rem;
`;

export const Text = styled.p`
  margin-top: 0.2rem;
  font-size: 1.1rem;
`;

const spotTypes = {
  water: 'blue',
  earth: 'green',
  air: 'yellow',
};

export const Characters = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
  width: 100%;
`;

export const TypeSpot = styled.div`
  width: calc(50% - 2rem);
  margin-right: 2rem;
  padding: 0.8rem 1.5rem;
  font-weight: bold;
  color: ${({ type }: SpotTypeProps) => `${spotTypes[type]}`};
`;

export const TypeVerify = styled.div`
  width: 8rem;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  color: ${({ isVerified }: VerifiedTypeProps) => (isVerified ? 'blue ' : 'red')};
  background: ${({ isVerified }: VerifiedTypeProps) => (isVerified ? 'blue ' : '#fcecec')};
`;

export const Location = styled.div`
  display: flex;
  margin: 1rem 0;
  padding: 1.8rem 1.5rem;
  border-radius: 10px;

  background: #fff;
`;

export const Name = styled.p`
  padding-bottom: 2rem;
  font-size: 1.4rem;
  font-weight: bold;
  border-bottom: 1px solid #eee;
`;

export const Info = styled.div`
  width: calc(25% - 5rem);
  margin-right: 5rem;
`;

export const Map = styled.div`
  width: 75%;
  height: 500px;

  svg {
    path {
      :hover {
        fill: #888;
      }
    }
  }
  .US {
    fill: red;
  }
`;

export const Addition = styled.div`
  margin-bottom: 1rem;
  color: #f1c1f7;
`;

export const Point = styled.div`
  margin: 1rem 0;
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2rem;
  font-size: 1.1rem;
  margin: 1rem 0;
  padding: 1.8rem 1.5rem;
  border-radius: 10px;

  background: #fff;
`;
