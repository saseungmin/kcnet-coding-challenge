import React, { useCallback, useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  changePassword,
  changePasswordForm,
  changeUser,
  passwordCheck,
  setOriginalUser,
  updatePassword,
  updateUser,
} from '../../modules/myInfo';
import { tempSetUser } from '../../modules/user';

import MyPrivacyTemplate from '../../components/myInfo/MyPrivacyTemplate';

const MyPrivacyContainer = () => {
  const {
    user, checkLoading, myInfo,
  } = useSelector(
    ({ user, myInfo, loading }) => ({
      user: user.user,
      myInfo,
      checkLoading: loading['user/CHECK'],
    }),
  );

  const {
    originalUser, userAuth, userError, auth, authError, password, passwordForm, passwordAuth,
    passwordAuthError,
  } = myInfo;

  const dispatch = useDispatch();

  const [error, setError] = useState(null);
  const [modals, setModals] = useState({
    updateModal: false,
    errorModal: false,
    passwordModal: false,
    confirmModal: false,
    changePasswordModal: false,
    successModal: false,
  });

  useEffect(() => {
    if (!checkLoading) {
      dispatch(setOriginalUser(user));
    }
  }, [dispatch, user, checkLoading]);

  const onChangeUser = useCallback((payload) => dispatch(changeUser(payload)), [dispatch]);
  const onChangePasswordForm = useCallback((payload) => {
    dispatch(changePasswordForm(payload));
  }, [dispatch]);

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

  const setLocalStrage = (originalUser) => {
    try {
      localStorage.setItem(
        'user',
        JSON.stringify({ userid: originalUser.userid, username: originalUser.username }),
      );
    } catch (e) {
      console.log('localStorage 오류');
    }
  };

  const validate = (originalUser) => {
    const { apikey, username } = originalUser;

    if (username.trim() === '') {
      setError('name');
      return false;
    } if (apikey.trim() === '') {
      setError('apikey');
      return false;
    }
    return true;
  };

  const onUpdate = useCallback(() => {
    const validated = validate(originalUser);
    if (!validated) {
      return;
    }
    dispatch(updateUser(originalUser));
    setLocalStrage(originalUser);

    dispatch(tempSetUser(originalUser));
  }, [dispatch, originalUser]);

  useEffect(() => {
    if (userError) {
      setModals({
        ...modals,
        updateModal: false,
        errorModal: true,
      });
    }
    // eslint-disable-next-line
  }, [userError]);

  useEffect(() => {
    if (error && error === 'password') {
      setModals({
        ...modals,
        passwordModal: true,
      });
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

  const passwordFormSubmit = useCallback(() => {
    const { password, passwordConfirm } = passwordForm;
    const { userid } = user;
    if (password.trim() === '') {
      setError('newPassword');
      return;
    }
    if (passwordConfirm.trim() === '') {
      setError('newPasswordConfirm');
      return;
    }
    if (password !== passwordConfirm) {
      setError('unCorrectPassword');
      return;
    }

    dispatch(updatePassword({ userid, password }));
  }, [dispatch, passwordForm, user]);

  const onPasswordChangeSubmit = (check) => (bool) => {
    setModals({
      ...modals,
      changePasswordModal: bool,
    });
    if (check) {
      passwordFormSubmit();
    }
  };

  useEffect(() => {
    if (authError) {
      setError('password');
    }
  }, [authError]);

  useEffect(() => {
    if (userAuth) {
      setModals({
        ...modals,
        updateModal: true,
      });
    }
    // eslint-disable-next-line
  }, [userAuth]);

  useEffect(() => {
    if (passwordAuth) {
      setModals({
        ...modals,
        updateModal: true,
      });
    }
    // eslint-disable-next-line
  }, [passwordAuth]);

  useEffect(() => {
    if (passwordAuthError) {
      setModals({
        ...modals,
        updateModal: false,
        errorModal: true,
      });
    }
    // eslint-disable-next-line
  }, [passwordAuthError]);

  return (
    <MyPrivacyTemplate
      auth={auth}
      user={originalUser}
      passwordForm={passwordForm}
      onChange={onChangeUser}
      error={error}
      onUpdate={onUpdateMyPrivacy}
      modals={modals}
      onConfirm={onConfirm}
      onVisibleError={onVisibleError}
      onChangePassword={onChangePassword}
      onChangePasswordForm={onChangePasswordForm}
      onPasswordCheckClick={onPasswordCheckClick}
      onPasswordChangeSubmit={onPasswordChangeSubmit}
    />
  );
};

export default MyPrivacyContainer;
