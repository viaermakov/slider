import * as React from 'react';
import { useAnimationFrame } from './hooks';

import { Container, Cover, Canvas, Tabs, Tab, Progress, Img, Wrapper } from './styles.css';

export interface ISliderProps {
  images: string[];
}
const Slider: React.FC<ISliderProps> = ({ images }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const around = React.useRef<boolean>(false);

  const [position, setPosition] = React.useState<number>(0);
  const [time, setTime] = React.useState<number>(0);
  const [coverWidth, setCoverWidth] = React.useState<number>(919);

  const [progressList, setProgressList] = React.useState([0, 0, 0]);
  const [orderList, setOrderList] = React.useState([1, 2, 3]);

  useAnimationFrame(() => {
    setTime((prevCount) => (prevCount + 60 * 0.01) % 100);
  });

  React.useEffect(() => {
    if (Math.round(time) === 100 && !around.current) {
      changePosition(time);
      around.current = true;

      return;
    }
    if (Math.round(time) !== 100) {
      around.current = false;
    }
    setProgressList((e) => [...e.slice(0, position), time, ...e.slice(position + 1)]);
  }, [time, around.current, position]);

  React.useEffect(() => {
    function handleResize() {
      setCoverWidth(containerRef.current!.offsetWidth);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [containerRef.current]);

  const handleClick = () => {
    changePosition();
    setTime(0);
  };

  const changePosition = (time: number = 100) => {
    if (position === images.length - 1) {
      setProgressList([0, 0, 0]);
      setPosition(0);
    } else {
      setPosition((e) => e + 1);
      setProgressList((e) => [...e.slice(0, position), Math.round(time), ...e.slice(position + 1)]);
    }
  };

  const renderTabs = () => {
    return (
      <Tabs>
        {images.map((url, index) => {
          return (
            <Tab>
              <Progress width={progressList[index]} />
            </Tab>
          );
        })}
      </Tabs>
    );
  };

  const renderCanvas = () => {
    return (
      <Canvas transform={position * coverWidth}>
        {images.map((url, index) => {
          return (
            <Cover order={orderList[index]} color="yellow" width={coverWidth}>
              <Img src={url}></Img>
            </Cover>
          );
        })}
      </Canvas>
    );
  };

  return (
    <Container>
      <Wrapper ref={containerRef} onClick={handleClick}>
        {renderTabs()}
        {renderCanvas()}
      </Wrapper>
    </Container>
  );
};

export default Slider;
