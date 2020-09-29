import React from 'react';

import ModalWindow from '../../common/ModalWindow';

const MyPrivacyUpdateFailModal = ({ visible, onConfirm }) => {
  const isDanger = true;

  return (
    <ModalWindow
      visible={visible}
      title="수정 실패"
      description="수정에 실패하였습니다!"
      onConfirm={onConfirm}
      danger={isDanger}
    />
  );
};

export default MyPrivacyUpdateFailModal;
