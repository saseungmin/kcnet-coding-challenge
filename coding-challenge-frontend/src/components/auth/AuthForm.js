import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[7]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.Teal[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: ${palette.gray[6]};
    border-bottom: 1px solid ${palette.Teal[7]};
  }
  & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  font-weight: bold;
  a {
    color: ${palette.Teal[5]};
    &:hover {
      color: ${palette.Teal[3]};
    }
  }
  text-align: right;
`;

const Span = styled.span`
  font-weight: lighter;
  color: ${palette.gray[6]};
  margin-right: 0.75rem;
`;

const textMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form>
        <StyledInput
          autoComplete="userid"
          name="userid"
          placeholder="아이디"
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="username"
            name="username"
            placeholder="이름"
          />
        )}
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
          />
        )}
        <Button cyan fullWidth style={{ marginTop: '1rem' }}>
          {text}
        </Button>
      </form>
      <Footer>
        {type === 'login' ? (
          <>
            <Span>아직 회원이 아니신가요?</Span>
            <Link to="/register">회원가입</Link>
          </>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
