import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MyPrivacyTemplate from '../../components/myInfo/MyPrivacyTemplate';
import {
  changePassword,
  changePasswordForm,
  changeUser,
  passwordCheck,
  setOriginalUser,
  updateUser,
} from '../../modules/myInfo';
import { tempSetUser } from '../../modules/user';

const MyPrivacyContainer = () => {
  const {
    user, orginalUser, checkLoading, userError, auth, authError, password, passwordForm,
  } = useSelector(
    ({ user, myInfo, loading }) => ({
      user: user.user,
      orginalUser: myInfo.originalUser,
      checkLoading: loading['user/CHECK'],
      userError: myInfo.userError,
      auth: myInfo.auth,
      authError: myInfo.authError,
      password: myInfo.password,
      passwordForm: myInfo.passwordForm,
    }),
  );
  const dispatch = useDispatch();

  const [error, setError] = useState(null);
  const [modals, setModals] = useState({
    updateModal: false,
    errorModal: false,
    passwordModal: false,
    confirmModal: false,
    changePasswordModal: false,
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
    } if (apikey.trim() === '') {
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
    }
  }, [userError, modals]);

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

  const passwordFormSubmit = () => {
    const { password, passwordConfirm } = passwordForm;
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
    }
  };

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
      return;
    }
    if (auth) {
      console.log('비번 체크 성공');
    }
  }, [authError, auth]);

  return (
    <MyPrivacyTemplate
      auth={auth}
      user={orginalUser}
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
