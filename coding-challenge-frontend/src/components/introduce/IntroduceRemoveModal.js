import React from 'react';

import ModalWindow from '../common/ModalWindow';

const IntroduceRemoveModal = ({ visible, onConfirm, onCancel }) => {
  const isDanger = true;
  return (
    <ModalWindow
      visible={visible}
      title="코딩 챌린지 삭제"
      description="코딩 챌린지를 삭제하시겠습니까?"
      confirmText="삭제"
      cancelText="취소"
      onConfirm={onConfirm}
      onCancel={onCancel}
      danger={isDanger}
    />
  );
};

export default IntroduceRemoveModal;
