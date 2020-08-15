import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';

const LoginPage = () => {
  const toggle = false;
  return (
    <AuthTemplate toggle={toggle} >
      <LoginForm />
    </AuthTemplate>
  );
};

export default LoginPage;
