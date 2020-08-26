import React from 'react';
import MyInfoTemplate from 'src/components/myInfo/MyInfoTemplate';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from 'src/containers/common/HeaderContainer';

const MyInfoPage = () => {
    return (
        <>
            <Helmet>
                <title>내 정보 - KCNET</title>
            </Helmet>
            <HeaderContainer />
            <MyInfoTemplate />
        </>
    );
};

export default MyInfoPage;