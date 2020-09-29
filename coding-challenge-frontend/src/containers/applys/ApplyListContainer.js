import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import qs from 'qs';
import moment from 'moment';
import 'moment-timezone';
import 'moment/locale/ko';

import { listApplys } from '../../modules/applys';
import ApplyList from '../../components/main/ApplyList';
import useInterval from '../../lib/useInterval';

moment.tz.setDefault('Asia/Seoul');

const ApplyListContainer = ({ location }) => {
  const dispatch = useDispatch();

  const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
  const [seconds, setSeconds] = useState(nowTime);

  const {
    applys, error, loading, user,
  } = useSelector(({ applys, loading, user }) => ({
    applys: applys.applys,
    error: applys.error,
    loading: loading['applys/LIST_APPLYS'],
    user: user.user,
  }));

  useInterval(() => {
    setSeconds(moment().format('YYYY-MM-DD HH:mm:ss'));
  }, 1000);

  useEffect(() => {
    const { lang, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listApplys({ lang, page }));
  }, [dispatch, location.search]);

  return (
    <ApplyList loading={loading} applys={applys} error={error} user={user} seconds={seconds} />
  );
};

export default withRouter(ApplyListContainer);
