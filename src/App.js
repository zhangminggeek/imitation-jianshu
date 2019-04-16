import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Globalstyle } from './style';
import { IconfontStyle } from './static/iconfont/iconfont';
import Header from './common/header'
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Globalstyle />
        <IconfontStyle />
        <Provider store={ store }>
          <Header />
          <BrowserRouter>
            <Route path="/" exact component={ Home }></Route>
            <Route path="/detail" exact component={ Detail }></Route>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
