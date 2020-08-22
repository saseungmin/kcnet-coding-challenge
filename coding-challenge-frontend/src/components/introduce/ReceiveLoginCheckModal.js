import React from 'react';
import ModalWindow from '../common/ModalWindow';

const ReceiveLoginCheckModal = ({ visible, onConfirm }) => {
    return (
        <ModalWindow
        visible={visible}
        title="접수 실패"
        description="로그인 후 이용하세요."
        onConfirm={onConfirm}
      />
    );
};

export default ReceiveLoginCheckModal;