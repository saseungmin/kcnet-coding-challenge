import React, { useEffect, useState } from 'react';
import AuthForm from '../../components/auth/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import { tempSetUser } from 'src/modules/user';
import { withRouter } from 'react-router-dom';

const RegisterForm = ({ history }) => {
  const [error, setError] = useState(null);
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
    if([userid, username, password, passwordConfirm].includes('')){
      setError('빈 칸을 모두 입력하세요.');
      return;
    }
    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      dispatch(changeField({form:'register', key:'password', value:''}));
      dispatch(changeField({form:'register', key:'passwordConfirm', value:''}));
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
      dispatch(tempSetUser(auth[0]));
    }
  }, [authError, auth, dispatch]);

  useEffect(() => {
    if (user) {
      console.log('가입 완료');
      history.push('/');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage 오류');
      }
    }
  }, [history, user]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(RegisterForm);
