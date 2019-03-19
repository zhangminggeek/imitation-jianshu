import React, { Component, Fragment } from 'react';
import { Globalstyle } from './style';
import { IconfontStyle } from './static/iconfont/iconfont';
import Header from './common/header'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Globalstyle />
        <IconfontStyle />
        <Header />
      </Fragment>
    );
  }
}

export default App;
