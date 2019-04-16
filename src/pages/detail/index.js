import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  DetailWrapper,
  Header,
  Content
} from './style'
import * as actionCreator from './store/actionCreator';

class Detail extends Component {
  render() {
    const { title, content } = this.props;
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{__html: content}}></Content>
      </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.handleArticleInfoGet()
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});

const mapDispatchToProps = (dispatch) => ({
  handleArticleInfoGet() {
    dispatch(actionCreator.getArticleInfo())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
