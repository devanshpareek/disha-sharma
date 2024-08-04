import { useState, useEffect } from 'react';

function useScreenSize() {
  const [windowDimensions, setWindowDimensions] = useState({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default useScreenSize;
