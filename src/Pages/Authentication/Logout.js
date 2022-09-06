import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogOut = () => {
  const { logout } = useAuth0();
  return (
    <button className="btn" onClick={() => logout({returnTo:window.location.origin})}>
      log out
    </button>
  );
};

export default LogOut;
