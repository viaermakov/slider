import * as React from 'react';

export const useAnimationFrame = (callback: Function) => {
  const requestRef = React.useRef<number>(0);
  const previousTimeRef = React.useRef<number>(0);

  const animate = (time: number) => {
    if (previousTimeRef.current != undefined) {
      callback();
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);
};
