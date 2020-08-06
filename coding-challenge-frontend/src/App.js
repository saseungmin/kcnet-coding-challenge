import React from 'react';
import { Route } from 'react-router-dom';
import IntroducePage from './pages/IntroducePage';
import JoinPage from './pages/JoinPage';
import mainPage from './pages/mainPage';

const App = () => {
  return(
    <>
      <Route component={mainPage} path="/" exact />
      <Route component={IntroducePage} path="/introduce/:postId" />
      <Route component={JoinPage} path="/join" />
    </>
  )
}

export default App;
