import React, { useEffect } from 'react';
import AuthForm from '../../components/auth/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import { tempSetUser } from 'src/modules/user';
import { withRouter } from 'react-router-dom';

const RegisterForm = ({ history }) => {
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { userid, username, password, passwordConfirm, userstatus } = form;
    console.log(userid, username, password);
    if (password !== passwordConfirm) {
      return;
    }
    dispatch(register({ userid, username, password, userstatus }));
  };

  // 맨 처음 랜러링
  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('error');
      console.log(authError);
    }
    if (auth) {
      console.log('가입 성공');
      dispatch(tempSetUser(auth));
    }
  }, [authError, auth, dispatch]);

  useEffect(() => {
    if (user) {
      console.log('가입 완료');
      console.log(user);
      history.push('/');
    }
  }, [history, user]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default withRouter(RegisterForm);
