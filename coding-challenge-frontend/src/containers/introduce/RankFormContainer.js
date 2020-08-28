import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getReceiveUser, unloadRank, getRankList } from 'src/modules/rank';
import RankForm from 'src/components/introduce/RankForm';

const RankFormContainer = ({ match }) => {
  const { id } = match.params;

  const dispatch = useDispatch();
  const { loading, user, rankList, rankError } = useSelector(({ loading, user, rank }) => ({
    user: user.user,
    loading: loading['rank/RANK_LIST'],
    rankList: rank.rankList,
    rankError: rank.rankError,
  }));

  useEffect(() => {
    if (user) {
      dispatch(getReceiveUser(id));
    } else {
      dispatch(unloadRank());
    }
    return () => {
      dispatch(unloadRank());
    };
  }, [dispatch, id, user]);

  useEffect(() => {
    dispatch(getRankList(id));
  }, [dispatch, id]);

  return <RankForm rankList={rankList} loading={loading} rankError={rankError} />;
};

export default withRouter(RankFormContainer);
