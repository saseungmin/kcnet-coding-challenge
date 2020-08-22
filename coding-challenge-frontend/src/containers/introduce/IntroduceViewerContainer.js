import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { readApply, unloadApply } from 'src/modules/apply';
import IntroduceViewer from 'src/components/introduce/IntroduceViewer';
import ApplyActionButtons from 'src/components/introduce/ApplyActionButtons';
import { setOriginalApply } from 'src/modules/write';
import { removeApply } from 'src/lib/api/apply';
import moment from 'moment';
import 'moment-timezone';
import 'moment/locale/ko';
import useInterval from 'src/lib/useInterval';
import ReceiveActionButton from 'src/components/introduce/ReceiveActionButton';
import { unloadRank, rankReceive } from 'src/modules/rank';
import { useCallback } from 'react';
moment.tz.setDefault('Asia/Seoul');

const IntroduceViewerContainer = ({ history, match }) => {
  const { id } = match.params;
  const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
  const [seconds, setSeconds] = useState(nowTime);

  const dispatch = useDispatch();
  const { apply, error, loading, user,receiveError } = useSelector(({ apply, loading, user, rank }) => ({
    apply: apply.apply,
    error: apply.error,
    user: user.user,
    loading: loading['apply/READ_APPLY'],
    receiveError: rank.receiveError,
  }));

  useInterval(() => {
    setSeconds(moment().format('YYYY-MM-DD HH:mm:ss'));
  }, 1000);

  const onEdit = () => {
    dispatch(setOriginalApply(apply));
    history.push('/write');
  };

  useEffect(() => {
    dispatch(readApply(id));
    return () => {
      dispatch(unloadApply());
      dispatch(unloadRank());
    };
  }, [dispatch, id]);

  const onRemove = async () => {
    try {
      await removeApply(id);
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const onApplyReceive = useCallback(() => {
    dispatch(rankReceive({applyId: id}));
  },[dispatch,id]);

  useEffect(() => {
    if (receiveError) {
      console.log('error');
      console.log(receiveError);
      return;
    }
  }, [receiveError]);

  return (
    <IntroduceViewer
      apply={apply}
      error={error}
      loading={loading}
      user={user}
      seconds={seconds}
      actionButtons={<ApplyActionButtons onEdit={onEdit} onRemove={onRemove} />}
      recieveButton={<ReceiveActionButton user={user} onApplyReceive={onApplyReceive}/>}
    />
  );
};

export default withRouter(IntroduceViewerContainer);
