import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from './store';
import { actionCreator as loginActionCreator } from '../../pages/login/store';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom'
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
    const { focused, list, page, handleMouseInStateChange, mouseInState, handlePageChange, totalPages }  = this.props;
    let newList = list.toJS();
    let pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 10, len = page * 10; i < len; i++) {
        pageList.push(newList[i] && <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>);
      }
    }
    if (focused || mouseInState) {
      return (
        <SearchInfo
          onMouseEnter={() => handleMouseInStateChange(true)}
          onMouseLeave={() => handleMouseInStateChange(false)}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handlePageChange(page, totalPages, this.spinIcon)}>
              <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe69b;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            <SearchInfoList>{pageList}</SearchInfoList>
          </div>
        </SearchInfo>
      )
    } else {
      return null;
    }
  };

  render() {
    const { isLogin, focused, list, handleInputFocusStateChange, handleLogout }  = this.props;
    return (
      <HeaderWrapper>
        <Link to="/"><Logo /></Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          {
            isLogin
              ? <NavItem className="right" onClick={() => handleLogout()}>退出</NavItem>
              : <Link to={'/login'}><NavItem className="right">登录</NavItem></Link>
          }
          <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
          <NavSearchWapper>
            <CSSTransition
              classNames="slide"
              in={focused}
              timeout={200}>
              <NavSearch
                placeholder="搜索"
                className={focused ? 'focus' : ''}
                onFocus={() => handleInputFocusStateChange(true, list)}
                onBlur={() => handleInputFocusStateChange(false, list)}>
              </NavSearch>
            </CSSTransition>
            <i className={`iconfont zoom ${focused ? 'focus' : ''}`}>&#xe60b;</i>
            {this.getListArea()}
          </NavSearchWapper>
        </Nav>
        <Addtion>
          <Link to="/write">
            <Button className="writting">
              <i className="iconfont">&#xe609;</i>写文章
            </Button>
          </Link>
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
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPages: state.getIn(['header', 'totalPages']),
    mouseInState: state.getIn(['header', 'mouseInState']),
    isLogin: state.getIn(['login', 'isLogin'])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // 修改搜索框聚焦状态
    handleInputFocusStateChange(isFocused, list) {
      dispatch(actionCreator.focusStateChange(isFocused));
      if (isFocused && !list.toJS().length) dispatch(actionCreator.getList())
    },
    // 修改鼠标
    handleMouseInStateChange(state) {
      dispatch(actionCreator.mouseInStateChange(state));
    },
    // 换一批
    handlePageChange(page, totalPages, icon) {
      const originAngle = parseInt(icon.style.transform.replace(/[^0-9]/g, '')) || 0;
      icon.style.transform = `rotate(${originAngle + 360}deg)`;
      page = page < totalPages ? ++page : 1;
      dispatch(actionCreator.pageChange(page));
    },
    // 退出
    handleLogout() {
      dispatch(loginActionCreator.changeLoginState(false))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
