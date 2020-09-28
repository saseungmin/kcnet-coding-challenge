import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../../components/common/Footer';
import { logout } from '../../modules/user';

const FooterContainer = () => {
  const {
    user, loadingList, loadingRead, loadingRank,
  } = useSelector(({ user, loading }) => ({
    user: user.user,
    loadingRead: loading['apply/READ_APPLY'],
    loadingList: loading['applys/LIST_APPLYS'],
    loadingRank: loading['rank/RANK_LIST'],
  }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };

  if (loadingList || loadingRead || loadingRank) {
    return null;
  }

  return <Footer user={user} onLogout={onLogout} />;
};

export default FooterContainer;
