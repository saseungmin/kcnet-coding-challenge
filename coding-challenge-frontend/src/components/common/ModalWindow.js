import React from 'react';
import palette from 'src/lib/styles/palette';
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
  width: 400px;
  height: 200px;
  background: white;
  padding: 1.5rem;
  border-radius: 5px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  h2 {
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-family: 'Cute Font', cursive;
  }
  p {
    margin-top: 3rem;
    margin-bottom: 2rem;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 2rem;
  & + & {
    margin-left: 0.75rem;
  }
`;

const InputValueBlock = styled.input`
  font-size: 1.2rem;
  border: none;
  border-bottom: 1px solid ${palette.Teal[6]};
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  height: 2rem;
  &:focus {
    color: ${palette.gray[6]};
    border-bottom: 1px solid ${palette.Teal[4]};
  }
  & {
    margin-top: 1rem;
  }
`;

const ModalWindow = ({
  visible,
  title,
  description = '',
  confirmText = '확인',
  cancelText,
  onConfirm,
  onCancel,
  danger,
  inputValue = false,
}) => {
  if (!visible) return null;
  return (
    <FullScreenBlock>
      <ModalWindowBlock>
        <h2>{title}</h2>
        {inputValue ? (
          <InputValueBlock type="password" placeholder="비밀번호를 입력하세요." />
        ) : (
          <p>{description}</p>
        )}
        <div className="buttons">
          {cancelText && onCancel ? (
            <StyledButton onClick={onCancel}>{cancelText}</StyledButton>
          ) : null}
          {danger ? (
            <StyledButton orange onClick={onConfirm}>
              {confirmText}
            </StyledButton>
          ) : (
            <StyledButton teal onClick={onConfirm}>
              {confirmText}
            </StyledButton>
          )}
        </div>
      </ModalWindowBlock>
    </FullScreenBlock>
  );
};

export default ModalWindow;
