import React from 'react';
//import MainForm from '../components/main/MainForm';
import ApplyList from '../components/main/ApplyList';
import RankForm from '../components/main/RankForm';
import Header from '../components/common/Header';

const mainPage = () => {
    return (
        <>
            <Header />
            <ApplyList />
            <RankForm />
        </>
    );
};

export default mainPage;