import React, { useEffect, useState, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import moment from 'moment';
import 'moment/locale/ko';

import { removeApply } from '../../lib/api/apply';
import ReceiveActionButton from '../../components/introduce/ReceiveActionButton';
import { unloadRank, rankReceive, getRankList } from '../../modules/rank';
import { cancelReceive } from '../../lib/api/rank';
import useInterval from '../../lib/useInterval';
import { setOriginalApply } from '../../modules/write';
import ApplyActionButtons from '../../components/introduce/ApplyActionButtons';
import IntroduceViewer from '../../components/introduce/IntroduceViewer';
import { readApply, unloadApply } from '../../modules/apply';

const IntroduceViewerContainer = ({ history, match }) => {
  const { id } = match.params;
  const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
  const [seconds, setSeconds] = useState(nowTime);

  const dispatch = useDispatch();
  const {
    apply, error, loading, user, receiveError, receiveUser, receiveLoading,
  } = useSelector(
    ({
      apply, loading, user, rank,
    }) => ({
      apply: apply.apply,
      error: apply.error,
      user: user.user,
      loading: loading['apply/READ_APPLY'],
      receiveError: rank.receiveError,
      receiveUser: rank.receiveUser,
      receiveLoading: loading['rank/GET_RECEIVE_USER'],
    }),
  );

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

  const onClickCancelReceive = useCallback(async () => {
    const { _id } = receiveUser;
    try {
      await cancelReceive(_id);
      dispatch(unloadRank());
      dispatch(getRankList(id));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, receiveUser, id]);

  const onApplyReceive = useCallback(() => {
    dispatch(rankReceive({ applyId: id }));
    dispatch(getRankList(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (receiveError) {
      console.log('error');
      console.log(receiveError);
    }
  }, [receiveError]);

  return (
    <IntroduceViewer
      apply={apply}
      error={error}
      loading={loading}
      user={user}
      seconds={seconds}
      receiveError={receiveError}
      receiveLoading={receiveLoading}
      actionButtons={<ApplyActionButtons onEdit={onEdit} onRemove={onRemove} />}
      recieveButton={(
        <ReceiveActionButton
          user={user}
          onApplyReceive={onApplyReceive}
          onClickCancelReceive={onClickCancelReceive}
          receiveUser={receiveUser}
        />
      )}
    />
  );
};

export default withRouter(IntroduceViewerContainer);
