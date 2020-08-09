import React from 'react';
import MainTemplate from '../components/main/MainTemplate';
import ApplyList from '../components/main/ApplyList';
import RankForm from '../components/main/RankForm';
import HeaderContainer from 'src/containers/common/HeaderContainer';

const mainPage = () => {
    return (
        <>
            <HeaderContainer />
            <MainTemplate>
                <ApplyList />
                <RankForm />
            </MainTemplate>
        </>
    );
};

export default mainPage;