import React from 'react';
import { Route } from 'react-router-dom';
import IntroducePage from './pages/IntroducePage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PostRegister from './pages/PostRegister';
import { Helmet } from 'react-helmet-async';

const App = () => {
  return(
    <>
    <Helmet>
      <title>KCNET 코딩 챌린지</title>
    </Helmet>
      <Route component={MainPage} path="/" exact />
      <Route component={IntroducePage} path="/introduce/:id" />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={PostRegister} path="/Write" />
    </>
  )
}

export default App;
