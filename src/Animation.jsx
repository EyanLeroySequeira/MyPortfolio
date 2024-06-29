import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const buildGrid = keyframes`
  0% {
    background-size: 0 0;
  }
  100% {
    background-image: radial-gradient(circle, transparent 1px, black 1px);
    background-size: 1vw 1vw;
  }
`;

const GridContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(100, 1fr);
  grid-template-rows: repeat(100, 1fr);
  background-color: black;
  overflow: hidden;

  &::before {
    content: '';
    grid-area: 1/1/101/101;
    background-color: black;
    animation: ${buildGrid} 2s ease-in-out forwards;
  }
`;

const GridAnimation = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const grid = gridRef.current;
      if (grid) {
        grid.style.gridTemplateColumns = `repeat(${Math.floor(window.innerWidth / 10)}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${Math.floor(window.innerHeight / 10)}, 1fr)`;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <GridContainer ref={gridRef} />;
};

export default GridAnimation;