import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from './store';

import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-image" src="//upload.jianshu.io/admin_banners/web_images/4630/63a365dda0a82690f897348d54964d407507be8d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        {this.props.showScrollTopButton &&  <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>}
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.handleShowScrollTopButtonStateChange)
  }

  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.handleShowScrollTopButtonStateChange)
  }
}

const mapStateToProps = (state) => ({
  showScrollTopButton: state.getIn(['home', 'showScrollTopButton'])
});

const mapDispatchToProps = (dispatch) => ({
  handleShowScrollTopButtonStateChange() {
    dispatch(actionCreator.changeShowScrollTopState(document.documentElement.scrollTop > 400))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
