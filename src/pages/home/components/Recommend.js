import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../store';
import {
  RecommendWrapper,
  RecommendItem
} from '../style'

class Recommend extends Component {
  render() {
    const { list } = this.props;
    return (
      <RecommendWrapper>
        {list.map(item => (
          <RecommendItem
            key={item.get('id')}
            imgUrl={item.get('imgUrl')}>
          </RecommendItem>
        ))}
      </RecommendWrapper>
    )
  }

  componentDidMount() {
    this.props.handleRecommendListGet()
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'recommendList'])
});

const mapDispatchToProps = (dispatch) => ({
  handleRecommendListGet() {
    dispatch(actionCreator.getRecommendList())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
