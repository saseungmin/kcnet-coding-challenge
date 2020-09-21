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
  const [modal, setModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

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
    setModal(false);
  };

  const onVisibleError = () => {
    setErrorModal(false);
  };

  const setLocalStrage = (orginalUser) => {
    try {
      localStorage.setItem(
        'user',
        JSON.stringify({ userid: orginalUser.userid, username: orginalUser.username }),
      );
    } catch (e) {
      console.log('localStorage 오류', e);
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
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    onChangeUser({ key: name, value: value });
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
      setModal(false);
      setErrorModal(true);
      return;
    }
  }, [userError]);

  const onChangePassword = useCallback(
    (e) => {
      const { value } = e.target;
      dispatch(changePassword(value));
    },
    [dispatch],
  );

  const onPasswordCheckConfirm = useCallback(() => {
    const { userid } = user;
    if (password.trim() === '') {
      console.log('비번을 입력');
      return false;
    }
    dispatch(passwordCheck({ userid, password }));
  }, [dispatch, password, user]);

  useEffect(() => {
    if (authError) {
      console.log('error');
      setError('비번 오류');
      return;
    }
    if (auth) {
      console.log('비번 체크 성공');
    }
  }, [authError, auth]);

  return (
    <MyPrivacyTemplate
      user={orginalUser}
      onChange={onChange}
      error={error}
      onUpdate={onUpdate}
      confirmModal={modal}
      onConfirm={onConfirm}
      userErrorModal={errorModal}
      onVisibleError={onVisibleError}
      onChangePassword={onChangePassword}
      onPasswordCheckConfirm={onPasswordCheckConfirm}
    />
  );
};

export default MyPrivacyContainer;
