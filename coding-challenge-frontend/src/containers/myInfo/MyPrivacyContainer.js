import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MyPrivacyTemplate from 'src/components/myInfo/MyPrivacyTemplate';
import { changeUser, setOriginalUser,updateUser } from 'src/modules/myInfo';
import { tempSetUser } from 'src/modules/user';

const MyPrivacyContainer = () => {
  const [error, setError] = useState(null);
  const { user, orginalUser } = useSelector(({ user, myInfo }) => ({
    user: user.user,
    orginalUser: myInfo.originalUser,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOriginalUser(user));
  }, [dispatch, user]);

  const onChangeUser = useCallback((payload) => dispatch(changeUser(payload)), [dispatch]);

  const onChange = (e) => {
    const { value, name } = e.target;
    onChangeUser({ key: name, value: value });
  };

  //TODO: error 변경사항 처리
  const onUpdate = useCallback(() => {
    const { apikey, username } = orginalUser;
    if (username.trim() === '' || username === null) {
      setError('이름을 입력해주세요.');
      return;
    } else if (apikey.trim() === '' || apikey === null) {
      setError('api키를 입력해주세요.');
      return;
    }

    dispatch(updateUser(orginalUser));
    dispatch(tempSetUser(orginalUser));
    try {
      localStorage.setItem('user', JSON.stringify({userid: orginalUser.userid, username:orginalUser.username }));
    } catch (e) {
      console.log('localStorage 오류', e);
    }
  },[orginalUser, dispatch] );

  return (
    <MyPrivacyTemplate user={orginalUser} onChange={onChange} error={error} onUpdate={onUpdate} />
  );
};

export default MyPrivacyContainer;
