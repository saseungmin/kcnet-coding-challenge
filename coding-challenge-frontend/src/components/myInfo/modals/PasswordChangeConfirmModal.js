import React from 'react';

import ModalWindow from '../../common/ModalWindow';

const PasswordChangeConfirmModal = ({ visible, onConfirm, onCancel }) => (
  <ModalWindow
    visible={visible}
    title="비밀 번호 변경"
    description="변경 사항을 저장하시겠습니까?"
    confirmText="저장"
    cancelText="취소"
    onConfirm={onConfirm}
    onCancel={onCancel}
  />
);

export default PasswordChangeConfirmModal;
