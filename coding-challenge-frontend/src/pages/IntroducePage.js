import React from 'react';
import HeaderContainer from 'src/containers/common/HeaderContainer';
import IntroduceViewerContainer from 'src/containers/introduce/IntroduceViewerContainer';
import RankFormContainer from 'src/containers/introduce/RankFormContainer';

const IntroducePage = () => {
  return (
    <>
      <HeaderContainer />
      <IntroduceViewerContainer />
      <RankFormContainer />
    </>
  );
};

export default IntroducePage;
