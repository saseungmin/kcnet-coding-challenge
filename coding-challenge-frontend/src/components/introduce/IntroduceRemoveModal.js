import React from 'react';
import ModalWindow from '../common/ModalWindow';

const IntroduceRemoveModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <ModalWindow
      visible={visible}
      title="코딩 챌린지 삭제"
      description="코딩 챌린지를 삭제하시겠습니까?"
      confirmText="삭제"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default IntroduceRemoveModal;
