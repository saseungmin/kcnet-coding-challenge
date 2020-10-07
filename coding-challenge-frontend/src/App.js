import React from 'react';

import { Route } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';

import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PostRegisterPage from './pages/PostRegisterPage';
import MyInfoPage from './pages/MyInfoPage';
import IntroducePage from './pages/IntroducePage';

const App = () => (
  <>
    <Helmet>
      <title>KCNET 코딩 챌린지</title>
    </Helmet>
    <Route component={MainPage} path="/" exact />
    <Route component={IntroducePage} path="/introduce/:id" />
    <Route component={LoginPage} path="/login" />
    <Route component={RegisterPage} path="/register" />
    <Route component={PostRegisterPage} path="/write" />
    <Route component={MyInfoPage} path="/myinfo" />
  </>
);

export default App;
