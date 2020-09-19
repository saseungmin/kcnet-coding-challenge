import React from 'react';
import ModalWindow from '../common/ModalWindow';

const MyPrivacyConfirmUpdateModal = ({ visible, onConfirm }) => {
  return (
    <ModalWindow
      visible={visible}
      title="수정 성공"
      description="변경 사항이 저장되었습니다."
      onConfirm={onConfirm}
    />
  );
};

export default MyPrivacyConfirmUpdateModal;
