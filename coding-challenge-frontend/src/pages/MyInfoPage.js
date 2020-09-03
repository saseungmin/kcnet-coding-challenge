import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from 'src/containers/common/HeaderContainer';
import ReceiveCompetitionContainer from 'src/containers/myInfo/ReceiveCompetitionContainer';
import MyInfoListPaginationContainer from 'src/containers/myInfo/MyInfoListPaginationContainer';
import MyRankListForm from 'src/components/myInfo/MyRankListForm';
import MyPrivacyForm from 'src/components/myInfo/MyPrivacyForm';

const MyInfoPage = () => {
    return (
        <>
            <Helmet>
                <title>내 정보 - KCNET</title>
            </Helmet>
            <HeaderContainer />
            <ReceiveCompetitionContainer />
            <MyInfoListPaginationContainer/>
            <MyRankListForm/>
            <MyPrivacyForm/>
        </>
    );
};

export default MyInfoPage;