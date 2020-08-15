import React from 'react';
import MainTemplate from '../components/main/MainTemplate';
import ApplyList from '../components/main/ApplyList';
import HeaderContainer from 'src/containers/common/HeaderContainer';

const MainPage = () => {
    return (
        <>
            <HeaderContainer />
            <MainTemplate>
                <ApplyList />
            </MainTemplate>
        </>
    );
};

export default MainPage;