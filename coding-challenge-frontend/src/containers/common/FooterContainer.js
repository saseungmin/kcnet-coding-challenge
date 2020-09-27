import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../../components/common/Footer';
import { logout } from '../../modules/user';

const FooterContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };

  return <Footer user={user} onLogout={onLogout} />;
};

export default FooterContainer;
