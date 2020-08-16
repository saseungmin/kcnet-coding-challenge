import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import qs from 'qs';
import { listApplys } from 'src/modules/applys';
import ApplyList from 'src/components/main/ApplyList';

const ApplyListContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { applys, error, loading, user } = useSelector(({ applys, loading, user }) => ({
    applys: applys.applys,
    error: applys.error,
    loading: loading['applys/LIST_APPLYS'],
    user: user.user,
  }));

  useEffect(() => {
    const { lang, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listApplys({ lang, page }));
  }, [dispatch, location.search]);
  return <ApplyList loading={loading} applys={applys} error={error} user={user} />;
};

export default withRouter(ApplyListContainer);
