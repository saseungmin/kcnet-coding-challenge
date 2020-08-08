import React from 'react';
//import MainForm from '../components/main/MainForm';
import ApplyList from '../components/main/ApplyList';
import RankForm from '../components/main/RankForm';
import HeaderContainer from 'src/containers/common/HeaderContainer';

const mainPage = () => {
    return (
        <>
            <HeaderContainer />
            <ApplyList />
            <RankForm />
        </>
    );
};

export default mainPage;