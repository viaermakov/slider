import * as React from 'react';

import { Container, Image, Text, ActionText } from './styles.css';
import { Comments } from 'organisms/comments';

export interface IPostProps {
  image: string;
  text: string;
}

const Post: React.FC<IPostProps> = ({ image, text }) => {
  const [isShow, setIsShow] = React.useState<boolean>(false);
  const isTextLong = text.length > 200;

  const handleShow = () => {
    setIsShow((prev: boolean) => !prev);
  };
  return (
    <Container>
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
