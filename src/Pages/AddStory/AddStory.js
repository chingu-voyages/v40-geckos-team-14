import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import styles from './AddStory.module.css';

const AddStory = () => {
  const { user, isAuthenticated } = useAuth0();
  const isUser = isAuthenticated && user;
  return (
    <div>
      {isUser && user.name ? (
        <p className={styles.title}>Welcome {user.name}</p>
      ) : null}
    </div>
  );
};

export default AddStory;
