import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MyPrivacyTemplate from 'src/components/myInfo/MyPrivacyTemplate';
import {
  changePassword,
  changeUser,
  passwordCheck,
  setOriginalUser,
  updateUser,
} from 'src/modules/myInfo';
import { tempSetUser } from 'src/modules/user';

const MyPrivacyContainer = () => {
  const [error, setError] = useState(null);
  const [modals, setModals] = useState({
    updateModal: false,
    errorModal: false,
    passwordModal: false,
    confirmModal: false,
  });

  const { user, orginalUser, checkLoading, userError, auth, authError, password } = useSelector(
    ({ user, myInfo, loading }) => ({
      user: user.user,
      orginalUser: myInfo.originalUser,
      checkLoading: loading['user/CHECK'],
      userError: myInfo.userError,
      auth: myInfo.auth,
      authError: myInfo.authError,
      password: myInfo.password,
    }),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!checkLoading) {
      dispatch(setOriginalUser(user));
    }
  }, [dispatch, user, checkLoading]);

  const onChangeUser = useCallback((payload) => dispatch(changeUser(payload)), [dispatch]);

  const onConfirm = () => {
    setModals({
      ...modals,
      updateModal: false,
    });
  };

  const onVisibleError = () => {
    setModals({
      ...modals,
      errorModal: false,
    });
  };

  const setLocalStrage = (orginalUser) => {
    try {
      localStorage.setItem(
        'user',
        JSON.stringify({ userid: orginalUser.userid, username: orginalUser.username }),
      );
    } catch (e) {
      console.log('localStorage 오류');
    }
  };

  const validate = (orginalUser) => {
    const { apikey, username } = orginalUser;

    if (username.trim() === '') {
      setError('name');
      return false;
    } else if (apikey.trim() === '') {
      setError('apikey');
      return false;
    }
    return true;
  };

  const onUpdate = useCallback(() => {
    const validated = validate(orginalUser);
    if (!validated) {
      return;
    }
    dispatch(updateUser(orginalUser));
    setLocalStrage(orginalUser);

    dispatch(tempSetUser(orginalUser));
  }, [dispatch, orginalUser]);

  useEffect(() => {
    if (userError) {
      setModals({
        ...modals,
        updateModal: false,
        errorModal: true,
      });
      return;
    }
  }, [userError, modals]);

  useEffect(() => {
    if (error && error === 'password') {
      setModals({
        ...modals,
        passwordModal: true,
      });
      return;
    }
    // eslint-disable-next-line
  }, [error, modals.passwordModal]);

  const onChangePassword = useCallback((password) => dispatch(changePassword(password)), [
    dispatch,
  ]);

  const onPasswordCheckConfirm = useCallback(() => {
    const { userid } = user;
    if (!password) {
      setError('password');
      return;
    }
    dispatch(passwordCheck({ userid, password }));
  }, [dispatch, password, user]);

  const onPasswordCheckClick = (check) => (bool) => {
    if (!bool) {
      setError(null);
    }
    if (check) {
      onPasswordCheckConfirm();
    }
    setModals({
      ...modals,
      passwordModal: bool,
    });
  };

  const onUpdateMyPrivacy = (check) => (bool) => {
    setModals({
      ...modals,
      confirmModal: bool,
    });
    if (check) {
      onUpdate();
    }
  };

  useEffect(() => {
    if (authError) {
      setError('password');
      return;
    }
    if (auth) {
      console.log('비번 체크 성공');
    }
  }, [authError, auth]);

  return (
    <MyPrivacyTemplate
      user={orginalUser}
      onChange={onChangeUser}
      error={error}
      onUpdate={onUpdateMyPrivacy}
      modals={modals}
      onConfirm={onConfirm}
      onVisibleError={onVisibleError}
      onChangePassword={onChangePassword}
      onPasswordCheckClick={onPasswordCheckClick}
    />
  );
};

export default MyPrivacyContainer;
