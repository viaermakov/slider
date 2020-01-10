import * as React from 'react';

import { Container, Bar, Point, Title, PointBlock } from './styles.css';

interface IPoint {
  value: number;
  text: string;
}

export interface IProgressProps {
  value: number;
  points: IPoint[];
}

const Progress: React.FC<IProgressProps> = ({ value, points }): React.ReactElement => {
  return (
    <Container>
      <Bar value={value} />
      {points.map((point: IPoint) => {
        return (
          <PointBlock value={point.value}>
            <Title>{point.text}</Title>
            <Point />
          </PointBlock>
        );
      })}
    </Container>
  );
};

export default Progress;
