import * as React from 'react';

import { Title } from './styles.css';
import { Slider } from 'organisms/slider';
import { Container, UserContainer, Feed, Preview } from './styles.css';
import { Sidebar } from 'organisms/sidebar';
import { FeedForm } from 'organisms/feedForm';

export interface IMainProps {}

const Main: React.FC<IMainProps> = () => {
  const images = ['src/assets/1.jpg', 'src/assets/2.jpg', 'src/assets/3.jpg'];
  return (
    <Container>
      <UserContainer>
        <Sidebar />
      </UserContainer>
      <Feed>
        <Preview>
          <Slider images={images} />
        </Preview>
        <FeedForm />
      </Feed>
    </Container>
  );
};

export default Main;
