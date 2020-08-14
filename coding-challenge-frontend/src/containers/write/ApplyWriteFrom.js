import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize,writeApply } from 'src/modules/write';
import PostRegisterForm from 'src/components/write/PostRegisterForm';

const ApplyWriteFrom = () => {
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
  } = useSelector(({ write }) => ({
    applystartday: write.applystartday,
    applyendday: write.applyendday,
    teststartday: write.teststartday,
    testendday: write.testendday,
    title: write.title,
    content: write.content,
    langs: write.langs,
  }));

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      [
        applystartday,
        applyendday,
        teststartday,
        testendday,
        title,
        content,
      ].includes('')
    ) {
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
      
    if ((applyStart - applyEnd >= 0) || (testStart - testEnd >= 0)) {
      setError('시작 날짜보다 이후의 날짜를 입력해주세요.');
      return;
    }
    dispatch(writeApply(applystartday,applyendday,teststartday,testendday,title,content,langs));
  };

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return (
    <PostRegisterForm
      onChangeField={onChangeField}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default ApplyWriteFrom;
