import React from 'react';
import palette from 'src/lib/styles/palette';
import styled from 'styled-components';
import Button from '../common/Button';
import PostRegisterLangs from './PostRegisterLangs';
import PostEditorForm from './PostEditorForm';

const WriteFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[7]};
    margin-bottom: 1rem;
  }
  form {
    div {
      margin-bottom: 0.5rem;
    }
  }
  .editer {
    height: 250px !important;
    border: 1px solid #f1f1f1 !important;
    padding: 5px !important;
    border-radius: 2px !important;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.Teal[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:focus {
    color: ${palette.gray[6]};
    border-bottom: 1px solid ${palette.Teal[7]};
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.23);
  }
  & {
    margin-top: 1rem;
  }
`;

const StyledDate = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.Teal[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 35%;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:focus {
    color: ${palette.gray[6]};
    border-bottom: 1px solid ${palette.Teal[7]};
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.23);
  }
  & {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

const ErrorMessage = styled.div`
  color: #ff6b6b;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const PostRegisterForm = ({ onChangebody, error, onSubmit, write, uploadImageCallBack, inputCheckBox,editor,onChangeEditor }) => {
  const {
    applystartday,
    applyendday,
    teststartday,
    testendday,
    title,
    originalApplyId,
  } = write;

  return (
    <WriteFormBlock>
      <h3>코딩 챌린지 등록하기</h3>
      <form onSubmit={onSubmit}>
        <div>접수 기간</div>
        <StyledDate
          type="date"
          name="applystartday"
          onChange={onChangebody}
          value={applystartday}
        />{' '}
        ~ <StyledDate type="date" name="applyendday" onChange={onChangebody} value={applyendday} />
        <div>대회 기간</div>
        <StyledDate
          type="datetime-local"
          name="teststartday"
          onChange={onChangebody}
          value={teststartday}
        />{' '}
        ~{' '}
        <StyledDate
          type="datetime-local"
          name="testendday"
          onChange={onChangebody}
          value={testendday}
        />
        <StyledInput
          name="title"
          placeholder="제목"
          type="text"
          onChange={onChangebody}
          value={title}
        ></StyledInput>
        <PostEditorForm editor={editor} onChangeEditor={onChangeEditor} uploadImageCallBack={uploadImageCallBack} />
        <div>사용 가능 언어</div>
        <PostRegisterLangs onChangeLangs={onChangebody} inputCheckBox={inputCheckBox} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button cyan fullWidth style={{ marginTop: '1rem' }}>
          {!!originalApplyId ? '수정하기' : '등록하기'}
        </Button>
      </form>
    </WriteFormBlock>
  );
};

export default PostRegisterForm;
