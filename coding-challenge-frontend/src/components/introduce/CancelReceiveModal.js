import React from 'react';

import ModalWindow from '../common/ModalWindow';

const CancelReceiveModal = ({ visible, onConfirm, onCancel }) => {
  const isDanger = true;

  return (
    <ModalWindow
      visible={visible}
      title="코딩 챌린지 접수 취소"
      description="코딩 챌린지 접수를 취소하시겠습니까?"
      cancelText="취소"
      onConfirm={onConfirm}
      onCancel={onCancel}
      danger={isDanger}
    />
  );
};

export default CancelReceiveModal;
