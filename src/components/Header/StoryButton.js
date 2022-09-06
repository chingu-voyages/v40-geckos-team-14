import styles from './StoryButton.module.css';
import { BsPlusLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const StoryButton = (props) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Link to="/add-story" onClick={() => loginWithRedirect()}>
      <button className={styles.btn}>
        <span>
          <BsPlusLg />
        </span>
        <span className={styles}>Add your</span>
        <span>story</span>
      </button>
    </Link>
  );
};

export default StoryButton;
