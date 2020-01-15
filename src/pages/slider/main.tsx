import * as React from 'react';

import { Slider } from 'organisms/slider';
import { Container, UserContainer, Feed, Preview } from './styles.css';
import { Sidebar } from 'organisms/sidebar';
import { FeedForm } from 'organisms/feedForm';
import { Post } from 'organisms/post';

export interface IMainProps {}

const Main: React.FC<IMainProps> = (): React.ReactElement => {
  const images = ['src/assets/1.jpg', 'src/assets/2.jpg', 'src/assets/3.jpg'];
  return (
    <>
      <Container type="simple">
        <UserContainer>
          <Sidebar />
        </UserContainer>
        <Feed>
          <Preview>
            <Slider images={images} />
          </Preview>
          <FeedForm />
          <Post image="src/assets/1.jpg" text={t} />
          <Post image="src/assets/1.jpg" text={t} />
        </Feed>
      </Container>
    </>
  );
};

export default Main;

const t = `«Есть такой отличный фильм из бондианы, "Золотой глаз" 1995-го года. Это первый фильм с Пирсом Броснаном в роли Бонда.
Главзлодей там Алек Тревельян, по сюжету — бывший коллега Бонда по опасному бизнесу, 
который решил сыграть на стороне плохишей (потому что с детства затаил обиду на англичан, ведь его родители были казаками, 
которых Британия выдала обратно СССР, после окончания Второй Мировой).`;

// interface IPoint {
//   value: number;
//   text: string;
// }

// const points: IPoint[] = [
//   {
//     value: 13,
//     text: 'Germany 1938 - 1945'
//   },
//   {
//     value: 23,
//     text: 'Germany 1938 - 1945'
//   },
//   {
//     value: 36,
//     text: 'Germany 1938 - 1945'
//   }
// ];
