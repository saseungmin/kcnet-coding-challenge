import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { unloadMyInfo, myInfoApplyList } from 'src/modules/myInfo';
import MyInfoTemplate from 'src/components/myInfo/MyInfoTemplate';

const ReceiveCompetitionContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { myInfoList, loading, error, user } = useSelector(({ myInfo, loading, user }) => ({
    myInfoList: myInfo.myInfoList,
    loading: loading['myInfo/MYINFO_APPLY_LIST'],
    error: myInfo.error,
    user: user.user,
  }));

  useEffect(() => {
    dispatch(myInfoApplyList());
  }, [dispatch]);

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
