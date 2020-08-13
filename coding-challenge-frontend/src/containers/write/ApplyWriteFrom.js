import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize } from 'src/modules/write';
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

  const onSubmit = e => {
    e.preventDefault();
    if([applystartday,applyendday,teststartday,testendday,title,content].includes('')){
      setError('입력이 안된 사항이 존재합니다.');
      return;
    }else if(langs.length === 0){
      setError('사용 가능 언어를 선택해주세요.');
      return;
    }
  }

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return <PostRegisterForm onChangeField={onChangeField} onSubmit={onSubmit} error={error} />;
};

export default ApplyWriteFrom;
