import styles from './StoryButton.module.css';

const StoryButton = (props) => {
  return (
    <button className={styles.btn}>
      <span >+</span>
      <span className={styles}>Add your</span>
      <span>story</span>
    </button>
  );
};

export default StoryButton;
