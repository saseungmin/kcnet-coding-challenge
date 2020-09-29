import React from 'react';

import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import PasswordChangeConfirmModal from './PasswordChangeConfirmModal';

const MyPrivacyPasswordChangeFormBlock = styled.div`
  margin-bottom: 5rem;
  padding: 2rem;
  border: 0.0625rem solid #d7e2eb;
  border-radius: 0.4rem;
  height: auto;
`;

const MyPasswordChangeItemBlock = styled.div`
  margin-bottom: 2rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

const MyPasswordLabelBlock = styled.label`
  display: inline-block;
  width: 15%;
  margin: 1rem 1rem 1rem 1rem;
  font-family: 'Jua', sans-serif;
  font-size: 1.1rem;
  &.required {
    line-height: 1.25rem;
    ::before {
      content: '*';
      display: inline-block;
      vertical-align: top;
      font-weight: 400;
      color: #fa5252;
      margin: 0 0.125rem 0 0;
      font-size: 1.25rem;
      line-height: 1.25rem;
    }
  }
`;

const MyPasswordInputBlock = styled.input`
  transition-duration: 0.08s;
  transition-property: all;
  transition-timing-function: ease-in-out;
  transition-delay: initial;
  padding: 8px 12px;
  border: 1px solid #d7e2eb;
  border-radius: 1.25rem;
  font-size: 16px;
  line-height: 22px;
  color: #263747;
  background-color: #fbfbfd;
  outline: 0;
  display: inline-block;
  width: 35%;

  :focus {
    border: 2px solid ${palette.Teal[4]};
  }
`;

const ErrorSmallBlock = styled.small`
  color: #fa5252;
  margin-left: 1rem;
  margin-top: 0.25rem;
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ERROR_MESSAGE = {
  password: '비밀번호를 입력하세요.',
  passwordConfirm: '비밀번호 확인을 입력하세요.',
};

const MyPrivacyPasswordChangeForm = ({
  passwordForm, onChangePasswordForm, modal, onSubmit, error,
}) => {
  const handlechangePassword = (e) => {
    const { value, name } = e.target;
    onChangePasswordForm({ key: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit()(true);
  };
  const handelCancel = () => {
    onSubmit()(false);
  };
  const handleConfirm = () => {
    onSubmit(true)(false);
  };

  const { password, passwordConfirm } = passwordForm;
  return (
    <>
      <form onSubmit={handleSubmit}>
        <MyPrivacyPasswordChangeFormBlock>
          <MyPasswordChangeItemBlock>
            <MyPasswordLabelBlock className="required" htmlFor="password">
              비밀번호
            </MyPasswordLabelBlock>
            <MyPasswordInputBlock
              name="password"
              autoComplete="off"
              type="password"
              value={password}
              onChange={handlechangePassword}
            />
            <ErrorSmallBlock>{error && error === 'newPassword' && ERROR_MESSAGE.password}</ErrorSmallBlock>
          </MyPasswordChangeItemBlock>
          <MyPasswordChangeItemBlock>
            <MyPasswordLabelBlock className="required" htmlFor="passwordConfirm">
              비밀번호 확인
            </MyPasswordLabelBlock>
            <MyPasswordInputBlock
              name="passwordConfirm"
              autoComplete="off"
              type="password"
              value={passwordConfirm}
              onChange={handlechangePassword}
            />
            <ErrorSmallBlock>{error && error === 'newPasswordConfirm' && ERROR_MESSAGE.passwordConfirm}</ErrorSmallBlock>
          </MyPasswordChangeItemBlock>
          <ButtonBlock>
            <Button teal style={{ marginLeft: '1rem' }} type="submit">
              변경 사항 저장
            </Button>
          </ButtonBlock>
        </MyPrivacyPasswordChangeFormBlock>
      </form>
      <PasswordChangeConfirmModal
        visible={modal}
        onConfirm={handleConfirm}
        onCancel={handelCancel}
      />
    </>

  );
};

export default MyPrivacyPasswordChangeForm;
