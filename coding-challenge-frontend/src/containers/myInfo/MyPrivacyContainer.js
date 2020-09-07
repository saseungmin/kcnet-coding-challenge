import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MyPrivacyTemplate from 'src/components/myInfo/MyPrivacyTemplate';
import { changeUser } from 'src/modules/myInfo';

const MyPrivacyContainer = () => {
    const { user } = useSelector(({ user }) => ({ user: user.user }));
    const dispatch = useDispatch();
    const onChangeUser = useCallback((payload) => dispatch(changeUser(payload)), [dispatch]);

    const onChange = (e) => {
        const { value, name } = e.target;
        onChangeUser({ key: name, value: value });
    }

    return (
        <MyPrivacyTemplate user={user} onChange={onChange}/>
    );
};

export default MyPrivacyContainer;