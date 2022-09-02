import styles from './StoryButton.module.css';
import {BsPlusLg} from 'react-icons/bs'

const StoryButton = (props) => {
  return (
    <button className={styles.btn}>
      <span ><BsPlusLg/></span>
      <span className={styles}>Add your</span>
      <span>story</span>
    </button>
  );
};

export default StoryButton;
