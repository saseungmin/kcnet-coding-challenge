import React from 'react';
import ModalWindow from '../common/ModalWindow';

const MyPrivacyUpdateFailModal = ({ visible, onConfirm }) => {
  return (
    <ModalWindow
      visible={visible}
      title="수정 실패"
      description="내 정보 수정에 실패하였습니다."
      onConfirm={onConfirm}
      danger={true}
    />
  );
};

export default MyPrivacyUpdateFailModal;
