import React, { useState, useCallback, useEffect, useRef } from 'react';
import palette from 'src/lib/styles/palette';
import styled from 'styled-components';
import Button from '../common/Button';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw, ContentState, EditorState } from 'draft-js';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from "draftjs-to-html";
import htmlToDraft from 'html-to-draftjs';

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

const StyledEditer = styled.div`
  width: 100%;
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
  color: #ff6b6b;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const PostRegisterForm = ({ onChangeField, error, onSubmit, write }) => {
  const [selectLangs, setSelectLangs] = useState([]);
  const [editor, setEditor] = useState('');
  const {applystartday,applyendday,teststartday,testendday,title,content,langs} = write;
  const inputCheckBox = useRef([React.createRef(), React.createRef()]);

  

  useEffect(() => {
    const blocksFromHtml = htmlToDraft(content);
    if(content){
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
      const editorState = EditorState.createWithContent(contentState);
      setEditor(editorState);
    }
    if(langs){
      for(let i = 0; i<langs.length; i++){
        inputCheckBox.current.map(current => current.current.value === langs[i] ? current.current.checked = true : '');
      }
      setSelectLangs(langs);
    }
  // eslint-disable-next-line
  },[])

  const onChangeEditer = useCallback((editerState) => {
    setEditor(editerState);
    onChangeField({key:'content', value: draftToHtml(convertToRaw(editerState.getCurrentContent())) });
  },[onChangeField]);

  const onChangeLangs = useCallback(
    (e) => {
      const { value, checked, name } = e.target;
      if (name === 'langs' && checked) {
        if (selectLangs.includes(value)) return;
        const nextTags = [...selectLangs, value];
        setSelectLangs(nextTags);
        onChangeField({ key: name, value: nextTags });
      } else if (name === 'langs' && !checked) {
        const nextTags = selectLangs.filter((t) => t !== value);
        setSelectLangs(nextTags);
        onChangeField({ key: name, value: nextTags });
      } else {
        onChangeField({ key: name, value: value });
      }
    },
    [selectLangs, onChangeField],
  );

  return (
    <WriteFormBlock>
      <h3>코딩 챌린지 등록하기</h3>
      <form onSubmit={onSubmit}>
        <div>접수 기간</div>
        <StyledDate type="date" name="applystartday" onChange={onChangeLangs} value={applystartday}/> ~{' '}
        <StyledDate type="date" name="applyendday" onChange={onChangeLangs} value={applyendday}/>
        <div>대회 기간</div>
        <StyledDate type="datetime-local" name="teststartday" onChange={onChangeLangs} value={teststartday}/> ~{' '}
        <StyledDate type="datetime-local" name="testendday" onChange={onChangeLangs} value={testendday}/>
        <StyledInput
          name="title"
          placeholder="제목"
          type="text"
          onChange={onChangeLangs}
          value={title}
        ></StyledInput>
        <StyledEditer>
          {/* 에디터 컴포넌트 */}
          <Editor
            editorState={editor}
            onEditorStateChange={onChangeEditer}
            // css Wrapper class name
            wrapperClassName="demo-wrapper"
            // css editor class name
            editorClassName="editer"
            localization={{
              locale: 'ko',
            }}
            // 에디터 상단에 표시될 toolbar 설정
            toolbar={{
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: true },
            }}
          />
        </StyledEditer>
        <div>사용 가능 언어</div>
        <StyledLabel>
          <input type="checkbox" name="langs" value="Java" onChange={onChangeLangs} ref={inputCheckBox.current[0]} />
          Java
        </StyledLabel>
        <StyledLabel>
          <input type="checkbox" name="langs" value="JavaScript" onChange={onChangeLangs}  ref={inputCheckBox.current[1]}/>
          JavaScript
        </StyledLabel>
        <StyledLabel>
          <input type="checkbox" name="langs" value="Python" onChange={onChangeLangs}  ref={inputCheckBox.current[2]} />
          Python
        </StyledLabel>
        <StyledLabel>
          <input type="checkbox" name="langs" value="C#" onChange={onChangeLangs}  ref={inputCheckBox.current[3]}/>
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
