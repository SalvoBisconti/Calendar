import styles from "./index.module.scss";

const Day = ({ content, activeElement, setActiveElement }) => {
  const onHandleClick = () => setActiveElement(content);

  return (
    <div
      className={`${styles.Day} ${content === activeElement && styles.active}`}
      onClick={onHandleClick}
    >
      {content}
    </div>
  );
};
export default Day;
