import React, {
  useCallback, useEffect, useState, useRef,
} from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { withRouter } from 'react-router-dom';

import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { convertToRaw, ContentState, EditorState } from 'draft-js';

import {
  changeField, initialize, writeApply, updateApply,
} from '../../modules/write';

import PostRegisterForm from '../../components/write/PostRegisterForm';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// FIXME: 리팩토링 하기
const ApplyWriteFrom = ({ history }) => {
  const dispatch = useDispatch();
  const {
    applystartday,
    applyendday,
    teststartday,
    testendday,
    title,
    content,
    langs,
    apply,
    applyError,
    write,
    originalApplyId,
  } = useSelector(({ write }) => ({
    applystartday: write.applystartday,
    applyendday: write.applyendday,
    teststartday: write.teststartday,
    testendday: write.testendday,
    title: write.title,
    content: write.content,
    langs: write.langs,
    apply: write.apply,
    applyError: write.applyError,
    write,
    originalApplyId: write.originalApplyId,
  }));

  const [error, setError] = useState(null);
  const [selectLangs, setSelectLangs] = useState(langs);
  const inputCheckBox = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);
  const [editor, setEditor] = useState(EditorState.createEmpty());
  const mounted = useRef(false);

  const onChangeField = useCallback((payload) => dispatch(changeField(payload)), [dispatch]);

  const onChangebody = (e) => {
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
      onChangeField({ key: name, value });
    }
  };

  const findCheckBox = (checkBox) => (lang) => (
    checkBox.current.findIndex((current) => current.current.value === lang)
  );

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    const blocksFromHtml = htmlToDraft(content);
    if (content) {
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
      const editorState = EditorState.createWithContent(contentState);
      setEditor(editorState);
    }
    if (langs) {
      langs.map((lang) => {
        const index = findCheckBox(inputCheckBox)(lang);
        inputCheckBox.current[index].current.checked = true;
        return null;
      });
    }
  }, [content, langs]);

  // FIXME: 한글로 쳤을 때 editorState가 한박자 늦게 되서 꼬이는 현상 => 공식문서 demo에서도 문제 발생
  const onChangeEditor = (editorState) => {
    setEditor(editorState);
    onChangeField({
      key: 'content',
      value: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if ([applystartday, applyendday, teststartday, testendday, title, content].includes('')) {
      setError('입력이 안된 사항이 존재합니다.');
      return;
    }
    if (langs.length === 0) {
      setError('사용 가능 언어를 선택해주세요.');
      return;
    }
    const applyStart = new Date(applystartday);
    const applyEnd = new Date(applyendday);
    const testStart = new Date(teststartday);
    const testEnd = new Date(testendday);

    if (!originalApplyId) {
      if (Date.now() - applyStart >= 0) {
        setError('접수 날짜가 현재 날짜보다 빠를 수 없습니다.');
        return;
      }
    }

    if (applyStart - applyEnd >= 0 || testStart - testEnd >= 0) {
      setError('시작 날짜보다 이후의 날짜를 입력해주세요.');
      return;
    }

    if (applyEnd - testStart > 0) {
      setError('접수 날짜가 테스트 날짜보다 빠를 수 없습니다.');
      return;
    }

    if (originalApplyId) {
      dispatch(
        updateApply({
          id: originalApplyId,
          applystartday,
          applyendday,
          teststartday,
          testendday,
          title,
          content,
          langs,
        }),
      );
      return;
    }
    dispatch(
      writeApply({
        applystartday,
        applyendday,
        teststartday,
        testendday,
        title,
        content,
        langs,
      }),
    );
  };

  useEffect(() => () => {
    dispatch(initialize());
  }, [dispatch]);

  useEffect(() => {
    if (apply) {
      history.push(`/introduce/${apply._id}`);
    }
    if (applyError) {
      originalApplyId
        ? setError('글 수정에 실패하였습니다.')
        : setError('글 등록에 실패하였습니다.');
    }
  }, [history, apply, applyError, originalApplyId]);

  // TODO: 리덕스로 상태관리하여 axios로 넘기기로 변경하기
  const uploadImageCallBack = (file) => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/apply/img');
    const data = new FormData();
    data.append('img', file);
    xhr.send(data);
    xhr.addEventListener('load', () => {
      const response = JSON.parse(xhr.responseText);
      resolve(response);
    });
    xhr.addEventListener('error', () => {
      const myError = JSON.parse(xhr.responseText);
      reject(myError);
    });
  });

  return (
    <PostRegisterForm
      onChangebody={onChangebody}
      onSubmit={onSubmit}
      write={write}
      error={error}
      uploadImageCallBack={uploadImageCallBack}
      inputCheckBox={inputCheckBox}
      onChangeEditor={onChangeEditor}
      editor={editor}
    />
  );
};

export default withRouter(ApplyWriteFrom);
