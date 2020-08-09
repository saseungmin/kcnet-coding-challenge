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
  input:checkbox {
    width: 0;
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

const PostRegisterForm = () => {
  const [localTags, setLocalTags] = useState([]);

  const onChange = useCallback((e) => {
    const { value, name, checked } = e.target;
    if (name === 'lang' && checked) {
      if (localTags.includes(value)) return;
      const nextTags = [...localTags, value];
      setLocalTags(nextTags);
    } else if (name === 'lang' && !checked) {
      const nextTags = localTags.filter((t) => t !== value);
      setLocalTags(nextTags);
    }else{
        console.log(value, name);
    }
  }, [localTags]);

  console.log(localTags);

  return (
    <WriteFormBlock>
      <h3>코딩 챌린지 등록하기</h3>
      <form>
        <div>접수 기간</div>
        <input type="date" name="applystart"  onChange={onChange}/> ~ <input type="date" name="applyend" onChange={onChange}/>
        <div>대회 기간</div>
        <input type="date" name="teststart" onChange={onChange}/> ~ <input type="date" name="testend" onChange={onChange}/>
        <StyledInput
          name="title"
          placeholder="제목"
          type="text"
          onChange={onChange}
        ></StyledInput>
        <StyledTextarea
          name="content"
          rows="12"
          placeholder="챌린지 소개"
          type="text"
          onChange={onChange}
        ></StyledTextarea>
        <div>사용 가능 언어</div>
        <StyledLabel>
          <input type="checkbox" name="lang" value="Java" onChange={onChange} />
          Java
        </StyledLabel>
        <StyledLabel>
          <input
            type="checkbox"
            name="lang"
            value="JavaScript"
            onChange={onChange}
          />
          JavaScript
        </StyledLabel>
        <StyledLabel>
          <input
            type="checkbox"
            name="lang"
            value="Python"
            onChange={onChange}
          />
          Python
        </StyledLabel>
        <StyledLabel>
          <input type="checkbox" name="lang" value="C#" onChange={onChange} />
          C#
        </StyledLabel>
        <Button cyan fullWidth style={{ marginTop: '1rem' }}>
          등록하기
        </Button>
      </form>
    </WriteFormBlock>
  );
};

export default PostRegisterForm;
