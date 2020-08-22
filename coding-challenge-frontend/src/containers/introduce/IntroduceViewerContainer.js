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
moment.tz.setDefault("Asia/Seoul");

const IntroduceViewerContainer = ({ history }) => {
  const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
  const [seconds, setSeconds] = useState(nowTime);

  const dispatch = useDispatch();
  const { apply, error, loading, user,selectApplyId } = useSelector(({ apply, loading, user }) => ({
    apply: apply.apply,
    error: apply.error,
    user: user.user,
    loading: loading['apply/READ_APPLY'],
    selectApplyId: apply.selectApplyId,
  }));

  useInterval(() => {
    setSeconds(moment().format('YYYY-MM-DD HH:mm:ss'));
  }, 1000);


  const onEdit = () => {
    dispatch(setOriginalApply(apply));
    history.push('/write');
  };

  useEffect(() => {
    dispatch(readApply(selectApplyId));
    return () => {
      dispatch(unloadApply());
    };
  }, [dispatch, selectApplyId]);

  const onRemove = async () => {
    try {
      await removeApply(selectApplyId);
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
      seconds={seconds}
      actionButtons={<ApplyActionButtons onEdit={onEdit} onRemove={onRemove}/>}
    />
  );
};

export default withRouter(IntroduceViewerContainer);
