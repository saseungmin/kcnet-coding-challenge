import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MyPrivacyTemplate from 'src/components/myInfo/MyPrivacyTemplate';
import { changeUser,setOriginalUser } from 'src/modules/myInfo';

const MyPrivacyContainer = () => {
    const { user,orginalUser } = useSelector(({ user, myInfo }) => ({ user: user.user, orginalUser: myInfo.originalUser }));
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setOriginalUser(user));
    }, [dispatch, user]);
    
    const onChangeUser = useCallback((payload) => dispatch(changeUser(payload)), [dispatch]);
    
    const onChange = (e) => {
        const { value, name } = e.target;
        onChangeUser({ key: name, value: value });
    }

    return (
        <MyPrivacyTemplate user={orginalUser} onChange={onChange}/>
    );
};

export default MyPrivacyContainer;