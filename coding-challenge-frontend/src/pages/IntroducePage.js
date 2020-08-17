import React from 'react';
import HeaderContainer from 'src/containers/common/HeaderContainer';
import IntroduceViewer from 'src/components/introduce/IntroduceViewer';
import RankForm from 'src/components/introduce/RankForm';

const IntroducePage = () => {
    return (
        <>
            <HeaderContainer/>
            <IntroduceViewer/>
            <RankForm/>
        </>
    );
};

export default IntroducePage;