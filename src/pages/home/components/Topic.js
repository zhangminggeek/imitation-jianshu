import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../store';
import {
  TopicWrapper,
  TopicItem
} from '../style'

class Topic extends Component {
  render() {
    const { list }  = this.props
    return (
      <TopicWrapper>
        {list.map((item) => (
          <TopicItem key={item.get('id')}>
            <img className="topic-pic" src={item.get('imgUrl')} alt=""/>
            {item.get('title')}
          </TopicItem>
        ))}
      </TopicWrapper>
    )
  }

  componentDidMount(){
    this.props.handleTopicListGet()
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'topicList'])
});

const initMapDispatchToProps = (dispatch) => ({
  // 获取topic列表
  handleTopicListGet() {
    dispatch(actionCreator.getTopicList())
  }
});

export default connect(mapStateToProps, initMapDispatchToProps)(Topic)
