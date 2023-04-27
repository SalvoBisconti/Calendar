import styles from "./index.module.scss";
import Day from "../day/Day";
import { useState } from "react";

const Month = ({ monthNum, monthLiteral }) => {
  const [activeElement, setActiveElement] = useState(new Date().getDate());

  return (
    <div className={styles.Month}>
      <div className={styles.header}>
        <h2 className={styles.title}>{monthLiteral}</h2>
      </div>
      <div className={styles.wrapper}>
        {[...new Array(monthNum)].map((item, i) => (
          <Day
            content={i + 1}
            activeElement={activeElement}
            setActiveElement={setActiveElement}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Month;
