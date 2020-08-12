import React from 'react';
import Header from 'src/components/common/Header';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'src/modules/user';

const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
