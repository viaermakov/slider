import * as React from 'react';

import {
  Container,
  Image,
  Text,
  ActionText,
  Author,
  Header,
  Avatar,
  About,
  Date,
} from './styles.css';
import { Comments } from 'organisms/comments';

export interface IPostProps {
  image: string;
  text: string;
}

const Post: React.FC<IPostProps> = ({ image, text }) => {
  const [isShow, setIsShow] = React.useState<boolean>(false);
  const isTextLong = text.length > 200;

  const handleShow = (): void => {
    setIsShow((prev: boolean) => !prev);
  };

  return (
    <Container>
      <Header>
        <Avatar src={'src/assets/1.jpg'} />
        <About>
          <Author>Olesia Scherbakova</Author>
          <Date>12 April 2019 at 10:47 AM</Date>
        </About>
      </Header>
      <Image src={image}></Image>
      <Text>
        {text.slice(0, 200)}...
        {isTextLong && !isShow && <ActionText onClick={handleShow}>{'  '}more</ActionText>}
        {isShow && text.slice(200)}
        {isShow && <ActionText onClick={handleShow}>{'  '} hide</ActionText>}
      </Text>
      <Comments />
    </Container>
  );
};

export default Post;
