import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MyPrivacyTemplate from 'src/components/myInfo/MyPrivacyTemplate';
import { changePassword, changeUser, setOriginalUser, updateUser } from 'src/modules/myInfo';
import { tempSetUser } from 'src/modules/user';

const MyPrivacyContainer = () => {
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const { user, orginalUser, checkLoading, userError } = useSelector(
    ({ user, myInfo, loading }) => ({
      user: user.user,
      orginalUser: myInfo.originalUser,
      checkLoading: loading['user/CHECK'],
      userError: myInfo.userError,
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

  const onUpdate = () => {
    const validated = validate(orginalUser);
    if (!validated) {
      return;
    }

    dispatch(updateUser(orginalUser));
    setLocalStrage(orginalUser);

    dispatch(tempSetUser(orginalUser));
  };

  useEffect(() => {
    if (userError) {
      setModal(false);
      setErrorModal(true);
      return;
    }
  }, [userError]);

  const onChangePassword = useCallback(
    (e) => {
      const { value, name } = e.target;
      dispatch(
        changePassword({
          userid: user.userid,
          [name]: value,
        }),
      );
    },
    [dispatch, user],
  );

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
    />
  );
};

export default MyPrivacyContainer;
