import React, { useState, useCallback } from 'react';
import palette from 'src/lib/styles/palette';
import styled from 'styled-components';
import Button from '../common/Button';

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
  &:checkbox {
    width: 0;
  }
`;

const StyledDate = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.Teal[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 45%;
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

const StyledTextarea = styled.textarea`
  font-size: 1rem;
  border: none;
  border: 1px solid ${palette.Teal[5]};
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
    margin-bottom: 1rem;
  }
`;

const StyledLabel = styled.label`
  margin-right: 1rem;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  color:#ff6b6b;
  text-align:center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const PostRegisterForm = ({onChangeField, error, onSubmit,applystartday}) => {
  const [selectLangs, setSelectLangs] = useState([]);

  const onChangeLangs = useCallback((e) => {
    const { value, checked, name } = e.target;
    if (name==="langs" && checked) {
      if (selectLangs.includes(value)) return;
      const nextTags = [...selectLangs, value];
      setSelectLangs(nextTags);
      onChangeField({key:name, value: nextTags})
    } else if (name=== "langs" && !checked) {
      const nextTags = selectLangs.filter((t) => t !== value);
      setSelectLangs(nextTags);
      onChangeField({key:name, value: nextTags})
    }else{
      onChangeField({key:name, value: value})
    }
  },[selectLangs,onChangeField]);

  return (
    <WriteFormBlock>
      <h3>코딩 챌린지 등록하기</h3>
      <form onSubmit={onSubmit}>
        <div>접수 기간</div>
        <StyledDate type="date" name="applystartday"  onChange={onChangeLangs} value={applystartday} /> ~ <StyledDate type="date" name="applyendday" onChange={onChangeLangs} />
        <div>대회 기간</div>
        <StyledDate type="datetime-local" name="teststartday" onChange={onChangeLangs} /> ~ <StyledDate type="datetime-local" name="testendday" onChange={onChangeLangs} />
        <StyledInput
          name="title"
          placeholder="제목"
          type="text"
          onChange={onChangeLangs}
        ></StyledInput>
        <StyledTextarea
          name="content"
          rows="12"
          placeholder="챌린지 소개"
          type="text"
          onChange={onChangeLangs}
        ></StyledTextarea>
        <div>사용 가능 언어</div>
        <StyledLabel>
          <input type="checkbox" name="langs" value="Java" onChange={onChangeLangs} />
          Java
        </StyledLabel>
        <StyledLabel>
          <input
            type="checkbox"
            name="langs"
            value="JavaScript"
            onChange={onChangeLangs}
          />
          JavaScript
        </StyledLabel>
        <StyledLabel>
          <input
            type="checkbox"
            name="langs"
            value="Python"
            onChange={onChangeLangs}
          />
          Python
        </StyledLabel>
        <StyledLabel>
          <input type="checkbox" name="langs" value="C#" onChange={onChangeLangs} />
          C#
        </StyledLabel>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button cyan fullWidth style={{ marginTop: '1rem' }}>
          등록하기
        </Button>
      </form>
    </WriteFormBlock>
  );
};

export default PostRegisterForm;
