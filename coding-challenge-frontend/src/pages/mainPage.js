import React from 'react';
import MainTemplate from '../components/main/MainTemplate';
import HeaderContainer from 'src/containers/common/HeaderContainer';
import ApplyListContainer from 'src/containers/applys/ApplyListContainer';
import PaginationContainer from 'src/containers/common/PaginationContainer';
import Footer from 'src/components/common/Footer';

const MainPage = () => {
    return (
        <>
            <HeaderContainer />
            <MainTemplate>
                <ApplyListContainer />
                <PaginationContainer />
            </MainTemplate>
            <Footer/>
        </>
    );
};

export default MainPage;