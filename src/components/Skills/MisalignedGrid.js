import React from "react";
import styles from "./MisalignedGrid.module.css";
import { useNavigate } from "react-router-dom";

const MisalignedGrid = ({ items,index }) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.gridContainer}
      style={{
        // ...(index == 1 && {
        //   paddingBottom: 0,
        // }),
        ...(index == 2 && {
          paddingTop: 0,
        }),
      }}
    >
      {items.map((item, index) => (
        <div
          onClick={() => {
            navigate(`/skills/photography/${item.link}`);
          }}
          key={index}
          className={`${styles.gridItem} ${styles[`misalign${index % 5}`]}`}
        >
          <img src={item.image} alt={item.title} className={styles.image} />
          <h3 className={styles.title}>{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MisalignedGrid;
