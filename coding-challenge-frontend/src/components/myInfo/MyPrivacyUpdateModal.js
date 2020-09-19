import React from 'react';
import ModalWindow from '../common/ModalWindow';

const MyPrivacyUpdateModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <ModalWindow
      visible={visible}
      title="내 정보 수정"
      description="변경 사항을 저장하시겠습니까?"
      confirmText="저장"
      cancelText="취소"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default MyPrivacyUpdateModal;
