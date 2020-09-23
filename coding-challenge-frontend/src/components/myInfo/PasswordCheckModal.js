import React from 'react';
import ModalWindow from '../common/ModalWindow';

const PasswordCheckModal = ({ visible, onConfirm, onCancel, onChange, error }) => {
  return (
    <ModalWindow
      visible={visible}
      title="비밀번호 확인"
      confirmText="확인"
      cancelText="취소"
      onConfirm={onConfirm}
      onCancel={onCancel}
      inputValue={true}
      onChange={onChange}
      error={error}
    />
  );
};

export default PasswordCheckModal;
