import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import PostRegisterForm from 'src/components/write/PostRegisterForm';

const PostRegister = () => {


  return (
    <>
      <AuthTemplate>
        <PostRegisterForm/>
      </AuthTemplate>
    </>
  );
};

export default PostRegister;
