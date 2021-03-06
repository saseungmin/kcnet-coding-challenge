import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { withRouter } from 'react-router-dom';

import qs from 'qs';

import moment from 'moment';

import useInterval from '../../lib/useInterval';

import { myInfoApplyList, unloadMyInfo } from '../../modules/myInfo';

import MyInfoTemplate from '../../components/myInfo/MyInfoTemplate';

import 'moment-timezone';
import 'moment/locale/ko';

const ReceiveCompetitionContainer = ({ history, location }) => {
  const dispatch = useDispatch();

  const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
  const [seconds, setSeconds] = useState(nowTime);

  const {
    myInfoList, loading, error, user,
  } = useSelector(({ myInfo, loading, user }) => ({
    myInfoList: myInfo.myInfoList,
    loading: loading['myInfo/MYINFO_APPLY_LIST'],
    error: myInfo.error,
    user: user.user,
  }));

  useEffect(() => {
    const { page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(myInfoApplyList({ page }));
  }, [dispatch, location.search]);

  useInterval(() => {
    setSeconds(moment().format('YYYY-MM-DD HH:mm:ss'));
  }, 1000);

  useEffect(() => () => {
    dispatch(unloadMyInfo());
  }, [dispatch]);

  useEffect(() => {
    if (!user) {
      history.push('/');
    }
  }, [user, history]);

  return (
    <MyInfoTemplate myInfoList={myInfoList} loading={loading} error={error} seconds={seconds} />
  );
};

export default withRouter(ReceiveCompetitionContainer);
