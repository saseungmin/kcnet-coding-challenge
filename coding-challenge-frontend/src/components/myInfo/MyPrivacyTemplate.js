import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from 'src/lib/styles/palette';
import MyPrivacyForm from './MyPrivacyForm';
import MyPrivacyConfirmUpdateModal from './MyPrivacyConfirmUpdateModal';
import MyPrivacyUpdateFailModal from './MyPrivacyUpdateFailModal';

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

const MyPrivacyTemplate = ({
  user,
  onChange,
  onUpdate,
  error,
  confirmModal,
  onConfirm,
  userErrorModal,
  onVisibleError,
}) => {
  return (
    <>
      <MyPrivacyTemplateBlock>
        <MyPrivacyHeadBlock>내 정보</MyPrivacyHeadBlock>
        {user && (
          <MyPrivacyForm user={user} onChange={onChange} onUpdate={onUpdate} error={error} />
        )}
      </MyPrivacyTemplateBlock>
      <MyPrivacyConfirmUpdateModal visible={confirmModal} onConfirm={onConfirm} />
      <MyPrivacyUpdateFailModal visible={userErrorModal} onConfirm={onVisibleError} />
    </>
  );
};

export default MyPrivacyTemplate;
