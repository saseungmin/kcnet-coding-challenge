import React from 'react';
import MainTemplate from '../components/main/MainTemplate';
import HeaderContainer from 'src/containers/common/HeaderContainer';
import ApplyListContainer from 'src/containers/applys/ApplyListContainer';

const MainPage = () => {
    return (
        <>
            <HeaderContainer />
            <MainTemplate>
                <ApplyListContainer />
            </MainTemplate>
        </>
    );
};

export default MainPage;