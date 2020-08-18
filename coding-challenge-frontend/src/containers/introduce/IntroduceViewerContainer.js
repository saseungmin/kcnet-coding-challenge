import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { readApply, unloadApply } from 'src/modules/apply';
import IntroduceViewer from 'src/components/introduce/IntroduceViewer';
import ApplyActionButtons from 'src/components/introduce/ApplyActionButtons';
import { setOriginalApply } from 'src/modules/write';

const IntroduceViewerContainer = ({ match, history }) => {
  const { id } = match.params;
  const dispatch = useDispatch();
  const { apply, error, loading, user } = useSelector(({ apply, loading, user }) => ({
    apply: apply.apply,
    error: apply.error,
    user: user.user,
    loading: loading['apply/READ_APPLY'],
  }));

  const onEdit = () => {
    dispatch(setOriginalApply(apply));
    history.push('/write');
  };

  useEffect(() => {
    dispatch(readApply(id));
    return () => {
      dispatch(unloadApply());
    };
  }, [dispatch, id]);

  return (
    <IntroduceViewer
      apply={apply}
      error={error}
      loading={loading}
      user={user}
      actionButtons={<ApplyActionButtons onEdit={onEdit} />}
    />
  );
};

export default withRouter(IntroduceViewerContainer);
