import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm';
import { Helmet } from 'react-helmet-async';

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
