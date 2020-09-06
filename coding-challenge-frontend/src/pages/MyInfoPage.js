import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from 'src/containers/common/HeaderContainer';
import ReceiveCompetitionContainer from 'src/containers/myInfo/ReceiveCompetitionContainer';
import MyInfoListPaginationContainer from 'src/containers/myInfo/MyInfoListPaginationContainer';
import MyRankListForm from 'src/components/myInfo/MyRankListForm';
import FooterContainer from 'src/containers/common/FooterContainer';
import MyPrivacyContainer from 'src/containers/myInfo/MyPrivacyContainer';

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
            <MyPrivacyContainer/>
            <FooterContainer/>
        </>
    );
};

export default MyInfoPage;