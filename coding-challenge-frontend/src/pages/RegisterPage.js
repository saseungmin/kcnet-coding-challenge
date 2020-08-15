import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm';

const RegisterPage = () => {
  const toggle = false;
  return (
    <AuthTemplate toggle={toggle}>
      <RegisterForm />
    </AuthTemplate>
  );
};

export default RegisterPage;
