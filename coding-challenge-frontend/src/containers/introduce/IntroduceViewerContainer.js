import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { readApply, unloadApply } from 'src/modules/apply';
import IntroduceViewer from 'src/components/introduce/IntroduceViewer';

const IntroduceViewerContainer = ({ match }) => {
  const { id } = match.params;
  const dispatch = useDispatch();
  const { apply, error, loading } = useSelector(({ apply, loading }) => ({
    apply: apply.apply,
    error: apply.error,
    loading: loading['apply/READ_APPLY'],
  }));

  useEffect(() => {
    dispatch(readApply(id));
    return () => {
      dispatch(unloadApply());
    };
  }, [dispatch, id]);

  return <IntroduceViewer apply={apply} error={error} loading={loading} />;
};

export default withRouter(IntroduceViewerContainer);
