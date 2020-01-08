import * as React from 'react';

import { Container, Avatar, Text, Row, TextBlock, AuthorText } from './styles.css';

export interface ICommentProps {
  avatar: string;
  author: string;
  message: string;
}

const Comment: React.FC<ICommentProps> = ({ avatar, author, message }) => {
  return (
    <Container>
      <Row>
        <Avatar src={avatar} />
        <TextBlock>
          <AuthorText color="#f7eb22">{author},</AuthorText>
          <Text>{message}</Text>
        </TextBlock>
      </Row>
      <Row>Like</Row>
    </Container>
  );
};
export default Comment;
