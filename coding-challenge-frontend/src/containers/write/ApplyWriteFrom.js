import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize } from 'src/modules/write';
import PostRegisterForm from 'src/components/write/PostRegisterForm';

const ApplyWriteFrom = () => {
  const dispatch = useDispatch();
  const {
    applystartday,
    applyendday,
    teststartday,
    testendday,
    content,
    title,
    langs,
  } = useSelector(({ write }) => ({
    applystartday: write.applystartday,
    applyendday: write.applyendday,
    teststartday: write.teststartday,
    testendday: write.testendday,
    content: write.content,
    title: write.title,
    langs: write.langs,
  }));

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);
  return (
    <PostRegisterForm
      onChangeField={onChangeField}
      applystartday={applystartday}
      applyendday={applyendday}
      teststartday={teststartday}
      testendday={testendday}
      content={content}
      title={title}
      langs={langs}
    />
  );
};

export default ApplyWriteFrom;
