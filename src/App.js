import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { Globalstyle } from './style';
import { IconfontStyle } from './static/iconfont/iconfont';
import Header from './common/header'
import store from './store';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Globalstyle />
        <IconfontStyle />
        <Provider store={ store }>
          <Header />
        </Provider>
      </Fragment>
    );
  }
}

export default App;
