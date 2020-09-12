import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MyPrivacyTemplate from 'src/components/myInfo/MyPrivacyTemplate';
import { changeUser, setOriginalUser, updateUser } from 'src/modules/myInfo';
import { tempSetUser } from 'src/modules/user';

const MyPrivacyContainer = () => {
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);

  const { user, orginalUser, checkLoading, userError, updateUserLoading } = useSelector(({ user, myInfo, loading }) => ({
    user: user.user,
    orginalUser: myInfo.originalUser,
    checkLoading: loading['user/CHECK'],
    updateUserLoading: loading['myInfo/UPDATE_USER'],
    userError: myInfo.userError,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    if(!checkLoading){
      dispatch(setOriginalUser(user));
    }
  }, [dispatch, user, checkLoading]);

  const onChangeUser = useCallback((payload) => dispatch(changeUser(payload)), [dispatch]);

  const onConfirm = () => {
    setModal(false);
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    onChangeUser({ key: name, value: value });
  };

  //TODO - error 별 변경사항 처리
  const onUpdate = (() => {
    const { apikey, username } = orginalUser;
    if (username.trim() === '') {
      setError('이름을 입력해주세요.');
      return;
    } else if (apikey.trim() === '') {
      setError('api키를 입력해주세요.');
      return;
    }
    dispatch(updateUser(orginalUser));

    try {
      localStorage.setItem(
        'user',
        JSON.stringify({ userid: orginalUser.userid, username: orginalUser.username }),
      );
    } catch (e) {
      console.log('localStorage 오류', e);
    }
    
    dispatch(tempSetUser(orginalUser))
    setModal(true);
    
  });


  useEffect(() => {
    if(userError){
      setError('변경사항 저장 실패');
      return;
    }
  },[userError]);


  return (
    <MyPrivacyTemplate user={orginalUser} onChange={onChange} error={error} onUpdate={onUpdate} confirmModal={modal} onConfirm={onConfirm}/>
  );
};

export default MyPrivacyContainer;
