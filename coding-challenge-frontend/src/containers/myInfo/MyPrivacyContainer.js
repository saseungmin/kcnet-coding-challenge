import React from 'react';
import { useSelector } from 'react-redux';
import MyPrivacyTemplate from 'src/components/myInfo/MyPrivacyTemplate';

const MyPrivacyContainer = () => {
    const { user } = useSelector(({ user }) => ({ user: user.user }));
    return (
        <MyPrivacyTemplate user={user}/>
    );
};

export default MyPrivacyContainer;