import React, { useState } from 'react';
import Button from '../common/Button';
import ReceiveApplyModal from './ReceiveApplyModal';
import ReceiveLoginCheckModal from './ReceiveLoginCheckModal';
import CancelReceiveModal from './CancelReceiveModal';

const ReceiveActionButton = ({ user, onApplyReceive, receiveUser, onClickCancelReceive}) => {
  const [modal, setModal] = useState(false);
  const onReceiveClick = () => {
    setModal(true);
  };
  const onCancel = () => {
    setModal(false);
  };
  const onConfirm = () => {
    setModal(false);
    onApplyReceive();
  };

  const onCancelReceive = () => {
    setModal(false);
    onClickCancelReceive();
  };

  return (
    <>
      {receiveUser ? (
        <Button orange className="applybutton" onClick={onReceiveClick}>
          접수취소
        </Button>
      ) : (
        <Button teal className="applybutton" onClick={onReceiveClick}>
          접수하기
        </Button>
      )}
      {!user ? (
        <ReceiveLoginCheckModal visible={modal} onConfirm={onCancel} />
      ) : receiveUser ? (
        <CancelReceiveModal visible={modal} onConfirm={onCancelReceive} onCancel={onCancel}/>
      ): (
        <ReceiveApplyModal visible={modal} onConfirm={onConfirm} onCancel={onCancel} />
      )}
    </>
  );
};

export default ReceiveActionButton;
