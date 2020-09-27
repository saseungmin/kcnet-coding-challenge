import React from 'react';
import { Helmet } from 'react-helmet-async';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm';

const RegisterPage = () => {
  const toggle = false;
  return (
    <>
      <Helmet>
        <title>회원가입-KCNET</title>
      </Helmet>
      <AuthTemplate toggle={toggle}>
        <RegisterForm />
      </AuthTemplate>
    </>
  );
};

export default RegisterPage;
