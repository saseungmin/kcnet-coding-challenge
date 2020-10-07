import React from 'react';

import { Helmet } from 'react-helmet-async';

import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';

const LoginPage = () => {
  const toggle = false;

  return (
    <>
      <Helmet>
        <title>로그인-KCNET</title>
      </Helmet>
      <AuthTemplate toggle={toggle}>
        <LoginForm />
      </AuthTemplate>
    </>
  );
};

export default LoginPage;
