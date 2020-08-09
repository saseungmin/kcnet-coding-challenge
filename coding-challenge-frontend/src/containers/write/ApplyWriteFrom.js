import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const ApplyWriteFrom = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, write, writeError, user } = useSelector(({ write }) => ({
    form: write.apply,
    write: write.write,
    writeError: write.writeError,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'apply',
        key: name,
        value,
      }),
    );
  };

  return <div></div>;
};

export default ApplyWriteFrom;
