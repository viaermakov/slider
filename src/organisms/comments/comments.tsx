import * as React from 'react';
import { Comment } from './comment';

import { Container, More } from './styles.css';

export interface ISidebarProps {}

const Sidebar: React.FC = () => {
  const [isShow, setIsShow] = React.useState<boolean>(false);

  if (comments.length === 0) {
    return null;
  }

  const handleClick = () => {
    setIsShow((prev: boolean) => !prev);
  };

  const renderMoreBlock = () => {
    return <More onClick={handleClick}>{isShow ? 'Hide' : 'More'} </More>;
  };

  const renderComments = () => {
    if (!isShow) {
      return (
        <Comment
          avatar={comments[0].avatar}
          author={comments[0].author}
          message={comments[0].message}
        />
      );
    }

    return comments.map((comment: IComment) => {
      return <Comment avatar={comment.avatar} author={comment.author} message={comment.message} />;
    });
  };

  return (
    <Container>
      {renderComments()}
      {renderMoreBlock()}
    </Container>
  );
};
export default Sidebar;

interface IComment {
  avatar: string;
  author: string;
  message: string;
}

const comments: IComment[] = [
  {
    avatar: 'src/assets/1.jpg',
    author: 'James MacEvoy',
    message: 'Hey, it is not appropriate for this trip :)'
  },
  {
    avatar: 'src/assets/1.jpg',
    author: 'James MacEvoy',
    message: 'Hey, it is not appropriate for this trip :)'
  },
  {
    avatar: 'src/assets/1.jpg',
    author: 'James MacEvoy',
    message: 'Hey, it is not appropriate for this trip :)'
  }
];
