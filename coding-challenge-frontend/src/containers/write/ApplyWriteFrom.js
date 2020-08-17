import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize, writeApply } from 'src/modules/write';
import PostRegisterForm from 'src/components/write/PostRegisterForm';
import { withRouter } from 'react-router-dom';

const ApplyWriteFrom = ({ history }) => {
  const [error, setError] = useState(null);
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
  }));

  const onChangeField = useCallback((payload) => dispatch(changeField(payload)), [dispatch]);

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

    if(Date.now() - applyStart >= 0){
      setError('접수 날짜가 현재 날짜보다 빠를 수 없습니다.');
      return;
    }

    if (applyStart - applyEnd >= 0 || testStart - testEnd >= 0) {
      setError('시작 날짜보다 이후의 날짜를 입력해주세요.');
      return;
    }

    if(applyEnd - testStart > 0){
      setError('접수 날짜가 테스트 날짜보다 빠를 수 없습니다.');
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
    dispatch(initialize());
  }, [dispatch]);

  useEffect(() => {
    if (apply) {
      history.push('/');
    }
    if (applyError) {
      console.log(applyError);
      setError('글 등록에 실패하였습니다.');
      return;
    }
  }, [history, apply, applyError]);

  return <PostRegisterForm onChangeField={onChangeField} onSubmit={onSubmit} error={error} />;
};

export default withRouter(ApplyWriteFrom);
