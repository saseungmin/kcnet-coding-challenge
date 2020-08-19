import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { readApply, unloadApply } from 'src/modules/apply';
import IntroduceViewer from 'src/components/introduce/IntroduceViewer';
import ApplyActionButtons from 'src/components/introduce/ApplyActionButtons';
import { setOriginalApply } from 'src/modules/write';
import { removeApply } from 'src/lib/api/apply';

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

  const onRemove = async () => {
    try {
      await removeApply(id);
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <IntroduceViewer
      apply={apply}
      error={error}
      loading={loading}
      user={user}
      actionButtons={<ApplyActionButtons onEdit={onEdit} onRemove={onRemove}/>}
    />
  );
};

export default withRouter(IntroduceViewerContainer);
