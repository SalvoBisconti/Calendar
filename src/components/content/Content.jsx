import styles from "./index.module.scss";
import Month from "../month/Month";
import {
  getMonthLiteral,
  getDaysActualMonth,
  toCapitalize,
} from "@/utils/func";

import { useState } from "react";

const Content = () => {
  const [monthCounter, setMonthCounter] = useState(0);
  const onHandlePreviousClick = () => setMonthCounter((prev) => prev - 1);
  const onHandleNextClick = () => setMonthCounter((prev) => prev + 1);

  return (
    <div className={styles.Content}>
      <button className={styles.btn} onClick={onHandlePreviousClick}>
        {"<"}
      </button>
      <Month
        monthNum={getDaysActualMonth(monthCounter)}
        monthLiteral={toCapitalize(
          getMonthLiteral(new Date().getMonth() + monthCounter)
        )}
      />
      <button className={styles.btn} onClick={onHandleNextClick}>
        {">"}
      </button>
    </div>
  );
};
export default Content;
