import React, { Component } from 'react';
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
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addtion,
  Button
} from './style';

class Header extends Component {
  getListArea() {
    const { focused, list }  = this.props;
    if (focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            <SearchInfoList>
              {list.map(item => {
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })}
            </SearchInfoList>
          </div>
        </SearchInfo>
      )
    } else {
      return null;
    }
  };

  render() {
    const { focused, handleInputFocusStateChange }  = this.props;
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
                onFocus={() => {handleInputFocusStateChange(true)}}
                onBlur={() => {handleInputFocusStateChange(false)}}>
              </NavSearch>
            </CSSTransition>
            <i className={`iconfont ${focused ? 'focus' : ''}`}>&#xe60b;</i>
            {this.getListArea()}
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
}

const mapStateToProps = (state) => {
  return {
    // focused: state.get('header').get('focused')
    // 等价于
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list'])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // 修改搜索框聚焦状态
    handleInputFocusStateChange(isFocused) {
      dispatch(actionCreator.focusStateChange(isFocused));
      if (isFocused) dispatch(actionCreator.getList())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
