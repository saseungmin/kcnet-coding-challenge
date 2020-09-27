import React from 'react';

import ModalWindow from '../common/ModalWindow';

const ReceiveApplyModal = ({ visible, onConfirm, onCancel }) => (
  <ModalWindow
    visible={visible}
    title="코딩 챌린지 접수"
    description="코딩 챌린지에 접수하시겠습니까?"
    cancelText="취소"
    onConfirm={onConfirm}
    onCancel={onCancel}
  />
);

export default ReceiveApplyModal;
