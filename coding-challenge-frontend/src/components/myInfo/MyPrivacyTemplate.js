import React from 'react';

import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import MyPrivacyConfirmUpdateModal from './modals/MyPrivacyConfirmUpdateModal';
import MyPrivacyUpdateFailModal from './modals/MyPrivacyUpdateFailModal';
import MyPrivacyForm from './MyPrivacyForm';
import MyPrivacyPasswordChangeForm from './MyPrivacyPasswordChangeForm';

const MyPrivacyTemplateBlock = styled(Responsive)`
  margin-top: 4rem;
`;

const MyPrivacyHeadBlock = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${palette.gray[7]};
  border-bottom: 1px solid ${palette.gray[3]};
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  padding-left: 1rem;
`;

const PRIVACY_TITLE_TEXT = {
  changePasswordTitle: '비밀 번호 변경',
  myInfoTitle: '내 정보',
};

const MyPrivacyTemplate = ({
  user,
  onChange,
  onUpdate,
  error,
  onConfirm,
  onVisibleError,
  onChangePassword,
  modals,
  onPasswordCheckClick,
  auth,
  passwordForm,
  onChangePasswordForm,
  onPasswordChangeSubmit,
}) => {
  const { updateModal, errorModal, changePasswordModal } = modals;
  const { changePasswordTitle, myInfoTitle } = PRIVACY_TITLE_TEXT;

  return (
    <>
      <MyPrivacyTemplateBlock>
        <MyPrivacyHeadBlock>{auth ? changePasswordTitle : myInfoTitle}</MyPrivacyHeadBlock>
        {!auth && user && (
          <MyPrivacyForm
            user={user}
            onChange={onChange}
            onUpdate={onUpdate}
            error={error}
            modals={modals}
            onChangePassword={onChangePassword}
            onPasswordCheckClick={onPasswordCheckClick}
          />
        )}
        {auth && (
          <MyPrivacyPasswordChangeForm
            error={error}
            passwordForm={passwordForm}
            onChangePasswordForm={onChangePasswordForm}
            onSubmit={onPasswordChangeSubmit}
            modal={changePasswordModal}
          />
        )}
      </MyPrivacyTemplateBlock>
      <MyPrivacyConfirmUpdateModal visible={updateModal} onConfirm={onConfirm} />
      <MyPrivacyUpdateFailModal visible={errorModal} onConfirm={onVisibleError} />
    </>
  );
};

export default MyPrivacyTemplate;
