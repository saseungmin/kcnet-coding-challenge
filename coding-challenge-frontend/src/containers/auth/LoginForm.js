import React, { useEffect, useState } from 'react';
import AuthForm from '../../components/auth/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, login } from '../../modules/auth';
import { withRouter } from 'react-router-dom';
import { tempSetUser } from 'src/modules/user';

const LoginForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { userid, password } = form;
    if ([userid, password].includes('')) {
      setError('빈 칸을 모두 입력하세요.');
      return;
    }
    dispatch(login({ userid, password }));
  };

  // 맨 처음 랜러링
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('error');
      console.log(authError);
      setError('비밀번호 혹은 아이디를 확인해주세요.');
    }
    if (auth) {
      dispatch(tempSetUser(auth[0]));
    }
  }, [authError, auth, dispatch]);

  useEffect(() => {
    if (user) {
      console.log('로그인 완료');
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
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(LoginForm);
