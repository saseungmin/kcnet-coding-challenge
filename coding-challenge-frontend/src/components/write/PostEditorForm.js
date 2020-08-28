import React from 'react';
import styled from 'styled-components';
import { Editor } from 'react-draft-wysiwyg';

const PostEditorFormBlock = styled.div`
  width: 100%;
  & {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

const PostEditorForm = ({ editor, onChangeEditor }) => {
  return (
    <PostEditorFormBlock>
      <Editor
        editorState={editor}
        onEditorStateChange={onChangeEditor}
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
    </PostEditorFormBlock>
  );
};

export default PostEditorForm;
