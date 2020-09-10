import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MyPrivacyTemplate from 'src/components/myInfo/MyPrivacyTemplate';
import { changeUser, setOriginalUser, updateUser } from 'src/modules/myInfo';
import { tempSetUser } from 'src/modules/user';

const MyPrivacyContainer = () => {
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);

  const { user, orginalUser,userError } = useSelector(({ user, myInfo }) => ({
    user: user.user,
    orginalUser: myInfo.originalUser,
    userError: myInfo.userError
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOriginalUser(user));
  }, [dispatch, user]);

  const onChangeUser = useCallback((payload) => dispatch(changeUser(payload)), [dispatch]);

  const onConfirm = () => {
    setModal(false);
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    onChangeUser({ key: name, value: value });
  };

  //TODO: error 변경사항 처리
  const onUpdate = useCallback(() => {
    const { apikey, username } = orginalUser;
    if (username.trim() === '') {
      setError('이름을 입력해주세요.');
      return;
    } else if (apikey.trim() === '') {
      setError('api키를 입력해주세요.');
      return;
    }

    dispatch(updateUser(orginalUser));

    if(!userError){
      dispatch(tempSetUser(orginalUser));
      try {
        localStorage.setItem(
          'user',
          JSON.stringify({ userid: orginalUser.userid, username: orginalUser.username }),
        );
        setModal(true);
      } catch (e) {
        console.log('localStorage 오류', e);
      }
    }else{
      setError('내 정보 수정 실패!');
    }

  }, [orginalUser, dispatch, userError]);

  return (
    <MyPrivacyTemplate user={orginalUser} onChange={onChange} error={error} onUpdate={onUpdate} confirmModal={modal} onConfirm={onConfirm}/>
  );
};

export default MyPrivacyContainer;
