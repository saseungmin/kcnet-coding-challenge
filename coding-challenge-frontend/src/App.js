import React from 'react';
import { Route } from 'react-router-dom';
import IntroducePage from './pages/IntroducePage';
import mainPage from './pages/mainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return(
    <>
      <Route component={mainPage} path="/" exact />
      <Route component={IntroducePage} path="/introduce/:postId" />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
    </>
  )
}

export default App;
