import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const FullScreenBlock = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWindowBlock = styled.div`
  width: 320px;
  background: white;
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-family: 'Cute Font', cursive;
  }
  p {
    margin-bottom: 3rem;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
  }
`;

const StyledButton = styled(Button)`
  & + & {
    margin-left: 0.75rem;
  }
`;

const ModalWindow = ({
  visible,
  title,
  description,
  confirmText = '확인',
  cancelText = '취소',
  onConfirm,
  onCancel,
}) => {
    if(!visible) return null;
  return (
    <FullScreenBlock>
      <ModalWindowBlock>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="buttons">
          <StyledButton onClick={onCancel}>{cancelText}</StyledButton>
          <StyledButton teal onClick={onConfirm}>
            {confirmText}
          </StyledButton>
        </div>
      </ModalWindowBlock>
    </FullScreenBlock>
  );
};

export default ModalWindow;
