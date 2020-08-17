import React from 'react';
import HeaderContainer from 'src/containers/common/HeaderContainer';
import RankForm from 'src/components/introduce/RankForm';
import IntroduceViewerContainer from 'src/containers/introduce/IntroduceViewerContainer';

const IntroducePage = () => {
  return (
    <>
      <HeaderContainer />
      <IntroduceViewerContainer />
      <RankForm />
    </>
  );
};

export default IntroducePage;
