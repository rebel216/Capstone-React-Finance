import React from 'react';
import { createBrowserHistory } from 'history';
import {  Route } from 'react-router';
import { BrowserRouter } from "react-router-dom";
import App from './pages/App';
import Stock from './pages/DetailPage';
import StockNews from './pages/StockNewsPage';

const history = createBrowserHistory();

const Routes = () => (
  <BrowserRouter basename="/Capstone-React-Finance">
    <Route exact path="/" component={App} />
    <Route exact path="/news" component={StockNews} />
    <Route exact path="/stock/:ticker" component={Stock} />
  </BrowserRouter>
);

export default Routes;
