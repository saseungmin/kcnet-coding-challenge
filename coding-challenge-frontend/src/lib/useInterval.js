import { useRef, useEffect } from 'react';

export default function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    // eslint-disable-next-line prefer-const
    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
