import React from 'react';
import MainTemplate from '../components/main/MainTemplate';
import HeaderContainer from '../containers/common/HeaderContainer';
import ApplyListContainer from '../containers/applys/ApplyListContainer';
import PaginationContainer from '../containers/common/PaginationContainer';
import FooterContainer from '../containers/common/FooterContainer';

const MainPage = () => (
  <>
    <HeaderContainer />
    <MainTemplate>
      <ApplyListContainer />
      <PaginationContainer />
    </MainTemplate>
    <FooterContainer />
  </>
);

export default MainPage;
