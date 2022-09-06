import StoryButton from './StoryButton';
import styles from './Header.module.css';
import LogOut from '../../Pages/Authentication/Logout';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Header = (props) => {
  const { isAuthenticated } = useAuth0();
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>WeaveStory</h1>
      </Link>
      <div>{isAuthenticated ? <LogOut /> : <StoryButton />}</div>
    </header>
  );
};

export default Header;
