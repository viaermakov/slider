import * as React from 'react';

import { Bar, Container, Point, PointBlock, Title } from './styles.css';

interface IPoint {
  value: number;
  text: string;
}

export interface IProgressProps {
  value: number;
  points: IPoint[];
}

const Progress: React.FC<IProgressProps> = ({ value, points }): React.ReactElement => (
  <Container>
    <Bar value={value} />
    {points.map((point: IPoint) => (
      <PointBlock value={point.value}>
        <Title>{point.text}</Title>
        <Point />
      </PointBlock>
    ))}
  </Container>
);

export default Progress;
