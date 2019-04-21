import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreator } from './store';

import {
  LoginWarpper,
  LoginBox,
  Input,
  Button
} from './style'

class Login extends Component {
  render() {
    const { isLogin } = this.props
    if (isLogin) {
      return <Redirect to="/" />
    } else {
      return (
        <LoginWarpper>
          <LoginBox>
            <Input placeholder="请输入账号" ref={(input) => this.account = input} />
            <Input placeholder="请输入密码" type="password" ref={(input) => this.password = input} />
            <Button onClick={() => this.props.handleLogin(this.account.value, this.password.value)}>登录</Button>
          </LoginBox>
        </LoginWarpper>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.getIn(['login', 'isLogin'])
});

const mapDispatchToProps = (dispatch) => ({
  handleLogin(account, password) {
    dispatch(actionCreator.login(account, password))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
