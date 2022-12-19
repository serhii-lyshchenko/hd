import React from 'react';

export default function useWindowDimensions() {
  function getWindowDimensions() {
    if (typeof window !== 'undefined') {
      return {
        height: window.innerHeight,
        width: window.innerWidth,
      };
    }

    return {
      width: 0,
      height: 0,
    };
  }

  const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());

  function handleResize() {
    setWindowDimensions(getWindowDimensions());
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
