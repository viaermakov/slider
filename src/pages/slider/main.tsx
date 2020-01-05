import * as React from 'react';

import { Title } from './styles.css';
import { Slider } from 'organisms/slider';
import { Container } from './styles.css';

export interface IMainProps {}

export default function Main(props: IMainProps) {
  const images = ['src/assets/1.jpg', 'src/assets/2.jpg', 'src/assets/3.jpg'];
  return (
    <Container>
      <Title>SLIDER</Title>
      <Slider images={images} />
    </Container>
  );
}
