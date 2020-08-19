import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import ApplyWriteFrom from 'src/containers/write/ApplyWriteFrom';
import { Helmet } from 'react-helmet-async';

const PostRegister = () => {
  const toggle = true;

  return (
    <>
      <Helmet>
        <title>코딩 챌린지 작성 - KCNET</title>
      </Helmet>
      <AuthTemplate toggle={toggle}>
        <ApplyWriteFrom />
      </AuthTemplate>
    </>
  );
};

export default PostRegister;
