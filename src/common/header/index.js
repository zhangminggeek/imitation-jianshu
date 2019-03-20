import React from 'react';
import { connect } from 'react-redux';
import { actionCreator } from './store';
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

const Header = (props) => {
  const { focused }  = props;
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
            in={focused}
            timeout={200}>
            <NavSearch
              placeholder="搜索"
              className={focused ? 'focus' : ''}
              onFocus={() => {props.handleInputFocusStateChange(true)}}
              onBlur={() => {props.handleInputFocusStateChange(false)}}>
            </NavSearch>
          </CSSTransition>
          <i className={`iconfont ${focused ? 'focus' : ''}`}>&#xe60b;</i>
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
};

const mapStateToProps = (state) => {
  return {
    // focused: state.get('header').get('focused')
    // 等价于
    focused: state.getIn(['header', 'focused'])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocusStateChange(state) {
      const action = actionCreator.focusStateChange(state);
      dispatch(action);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
