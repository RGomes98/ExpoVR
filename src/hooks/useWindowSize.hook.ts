import { useState, useEffect } from 'react';

export function useWindowSize() {
  const getSize = () => ({
    width: window.visualViewport?.width ?? window.innerWidth,
    height: window.visualViewport?.height ?? window.innerHeight,
  });

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    const handleResize = () => setWindowSize(getSize);
    handleResize();

    const controller = new AbortController();
    const { signal } = controller;

    window.addEventListener('resize', handleResize, { signal });
    return () => controller.abort();
  }, []);

  return windowSize;
}
