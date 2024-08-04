import React from "react";

const ComplexWavyLineComponent = () => {
  const width = 1250;
  const height = 400;
  const pathData = `
    M 100 300
    C 300 100, 500 100, 700 300
    C 900 500, 1100 500, 1300 300
  `;

  return (
    <svg width={'100vw'} height={height} style={{ border: "1px solid black" }}>
      <path d={pathData} stroke="black" strokeWidth="2" fill="transparent" />
      {/* Node points */}
      <circle cx="100" cy="300" r="5" fill="red" />
      <circle cx="700" cy="300" r="5" fill="red" />
      <circle cx="1300" cy="300" r="5" fill="red" />
    </svg>
  );
};

export default ComplexWavyLineComponent;
