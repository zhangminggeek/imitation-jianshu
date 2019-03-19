import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearchWapper,
  NavSearch,
  Addtion,
  Button
} from './style';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: false
    }

    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo href="/"></Logo>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
          <NavSearchWapper>
            <CSSTransition
              classNames="slide"
              in={this.state.focused}
              timeout={200}
            >
              <NavSearch
                placeholder="搜索"
                className={this.state.focused ? 'focus' : ''}
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
              >
              </NavSearch>
            </CSSTransition>
            <i className={`iconfont ${this.state.focused ? 'focus' : ''}`}>&#xe60b;</i>
          </NavSearchWapper>
        </Nav>
        <Addtion>
          <Button className="writting">
            <i className="iconfont">&#xe609;</i>写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addtion>
      </HeaderWrapper>
    )
  }

  handleInputFocus() {
    this.setState(() => ({
      focused: true
    }))
  }

  handleInputBlur() {
    this.setState(() => ({
      focused: false
    }))
  }
}

export default Header;
