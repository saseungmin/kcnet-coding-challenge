import React from 'react';

import HeaderContainer from '../containers/common/HeaderContainer';
import IntroduceViewerContainer from '../containers/introduce/IntroduceViewerContainer';
import RankFormContainer from '../containers/introduce/RankFormContainer';
import FooterContainer from '../containers/common/FooterContainer';

const IntroducePage = () => (
  <>
    <HeaderContainer />
    <IntroduceViewerContainer />
    <RankFormContainer />
    <FooterContainer />
  </>
);

export default IntroducePage;
