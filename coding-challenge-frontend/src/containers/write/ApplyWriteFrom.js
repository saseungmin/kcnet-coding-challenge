import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize, writeApply, updateApply } from 'src/modules/write';
import PostRegisterForm from 'src/components/write/PostRegisterForm';
import { withRouter } from 'react-router-dom';

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
    write: write,
    originalApplyId: write.originalApplyId,
  }));

  const [error, setError] = useState(null);
  const [selectLangs, setSelectLangs] = useState(langs);

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
      onChangeField({ key: name, value: value });
    }
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
    const applyStart = new Date(applystartday),
      applyEnd = new Date(applyendday),
      testStart = new Date(teststartday),
      testEnd = new Date(testendday);

    if(!originalApplyId){
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

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  useEffect(() => {
    if (apply) {
      history.push('/');
    }
    if (applyError) {
      originalApplyId
        ? setError('글 수정에 실패하였습니다.')
        : setError('글 등록에 실패하였습니다.');
      return;
    }
  }, [history, apply, applyError, originalApplyId]);

const uploadImageCallBack = file => {
  return new Promise(
    (resolve, reject) => {
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
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    }
  );
}


  return (
    <PostRegisterForm
      onChangeField={onChangeField}
      onChangebody={onChangebody}
      onSubmit={onSubmit}
      write={write}
      error={error}
      uploadImageCallBack={uploadImageCallBack}
    />
  );
};

export default withRouter(ApplyWriteFrom);
