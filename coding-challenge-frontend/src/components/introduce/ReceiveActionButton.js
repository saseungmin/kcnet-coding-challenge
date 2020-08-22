import React, { useState } from 'react';
import Button from '../common/Button';
import ReceiveApplyModal from './ReceiveApplyModal';
import ReceiveLoginCheckModal from './ReceiveLoginCheckModal';

const ReceiveActionButton = ({ user, onApplyReceive }) => {
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
  return (
    <>
      <Button teal className="applybutton" onClick={onReceiveClick}>
        접수하기
      </Button>
      {user ? (
        <ReceiveApplyModal visible={modal} onConfirm={onConfirm} onCancel={onCancel} />
      ) : (<ReceiveLoginCheckModal visible={modal} onConfirm={onCancel}/>)}
    </>
  );
};

export default ReceiveActionButton;
