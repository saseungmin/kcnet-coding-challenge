import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import ApplyWriteFrom from 'src/containers/write/ApplyWriteFrom';

const PostRegister = () => {
  const toggle = true;

  return (
    <>
      <AuthTemplate toggle={toggle} >
        <ApplyWriteFrom/>
      </AuthTemplate>
    </>
  );
};

export default PostRegister;
