import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { unloadMyInfo, myInfoApplyList } from 'src/modules/myInfo';
import MyInfoTemplate from 'src/components/myInfo/MyInfoTemplate';
import qs from 'qs';

const ReceiveCompetitionContainer = ({ history, location }) => {
  const dispatch = useDispatch();
  const { myInfoList, loading, error, user } = useSelector(({ myInfo, loading, user }) => ({
    myInfoList: myInfo.myInfoList,
    loading: loading['myInfo/MYINFO_APPLY_LIST'],
    error: myInfo.error,
    user: user.user,
  }));

  useEffect(() => {
    const { page } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });
    dispatch(myInfoApplyList({page}));
  }, [dispatch, location.search]);

  useEffect(() => {
    if (!user) {
      history.push('/');
    }
    return () => {
      dispatch(unloadMyInfo());
    };
  }, [dispatch, history, user]);

  return <MyInfoTemplate myInfoList={myInfoList} loading={loading} error={error} />;
};

export default withRouter(ReceiveCompetitionContainer);
