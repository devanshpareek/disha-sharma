import React from "react";
import ReactWordcloud from "react-wordcloud";
import TagCloud from "react-tag-cloud";
import "./WordCloud.css";

const options = {
  rotations: 2,
  rotationAngles: [0],
  // fontSizes: [22, 22],
  fontFamily: "Goudy Old Style",
  padding: 10,
  deterministic: false,
  // fontFamily: "impact",
  fontSizes: [5, 60],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  rotations: 3,
  rotationAngles: [0, 90],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 2000
};

export function Wordcloud({ words, size }) {
  const callbacks = {
    getWordColor: (word) => word.color,
  };

  return (
    <ReactWordcloud  callbacks={callbacks} words={words} options={options} />
    // <TagCloud
    //   className="tag-cloud"
    //   style={{
    //     fontFamily: "sans-serif",
    //     fontSize: 30,
    //     fontWeight: "bold",
    //     fontStyle: "italic",
    //     color: "black",
    //     padding: 5,
    //     width: "100%",
    //     height: "100%",
    //   }}
    // >
    //   {words.map((word, index) => (
    //     <div
    //       key={index}
    //       style={{
    //         color: word.color,
    //       }}
    //     >
    //       {word.text}
    //     </div>
    //   ))}
    // </TagCloud>
  );
}
