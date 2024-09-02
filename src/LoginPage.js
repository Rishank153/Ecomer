import React from 'react';
import Login from './Login';

const LoginPage = ({ login }) => {
  return (
    <div className="login-page">
      <Login login={login} />
    </div>
  );
};

export default LoginPage;
