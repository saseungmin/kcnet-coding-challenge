import React from 'react';
import { Helmet } from 'react-helmet-async';

import AuthTemplate from '../components/auth/AuthTemplate';
import ApplyWriteFrom from '../containers/write/ApplyWriteFrom';

const PostRegisterPage = () => {
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

export default PostRegisterPage;
