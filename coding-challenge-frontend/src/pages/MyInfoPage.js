import React from 'react';
import { Helmet } from 'react-helmet-async';

import HeaderContainer from '../containers/common/HeaderContainer';
import ReceiveCompetitionContainer from '../containers/myInfo/ReceiveCompetitionContainer';
import MyInfoListPaginationContainer from '../containers/myInfo/MyInfoListPaginationContainer';
import MyRankListForm from '../components/myInfo/MyRankListForm';
import FooterContainer from '../containers/common/FooterContainer';
import MyPrivacyContainer from '../containers/myInfo/MyPrivacyContainer';

const MyInfoPage = () => (
  <>
    <Helmet>
      <title>내 정보 - KCNET</title>
    </Helmet>
    <HeaderContainer />
    <ReceiveCompetitionContainer />
    <MyInfoListPaginationContainer />
    <MyRankListForm />
    <MyPrivacyContainer />
    <FooterContainer />
  </>
);

export default MyInfoPage;
