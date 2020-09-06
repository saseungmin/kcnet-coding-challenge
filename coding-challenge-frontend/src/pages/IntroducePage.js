import React from 'react';
import HeaderContainer from 'src/containers/common/HeaderContainer';
import IntroduceViewerContainer from 'src/containers/introduce/IntroduceViewerContainer';
import RankFormContainer from 'src/containers/introduce/RankFormContainer';
import FooterContainer from 'src/containers/common/FooterContainer';

const IntroducePage = () => {
  return (
    <>
      <HeaderContainer />
      <IntroduceViewerContainer />
      <RankFormContainer />
      <FooterContainer/>
    </>
  );
};

export default IntroducePage;
