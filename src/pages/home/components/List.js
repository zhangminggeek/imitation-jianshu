import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../store';
import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style'

class List extends Component {
  render() {
    const { articleList, handleMoreArticlesLoad } = this.props;
    return (
      <div>
        {articleList.map((item, index) => (
          <ListItem key={index}>
            <ListInfo>
              <h3 className="title">{item.get('title')}</h3>
              <p className="desc">{item.get('desc')}</p>
            </ListInfo>
            <img className="list-pic" src={item.get('imgUrl')} alt=""/>
          </ListItem>
        ))}
        <LoadMore onClick={ handleMoreArticlesLoad }>加载更多</LoadMore>
      </div>
    )
  }

  componentDidMount() {
    this.props.handleArticleListGet()
  }
}

const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList'])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleArticleListGet() {
      dispatch(actionCreator.getArticleList())
    },
    handleMoreArticlesLoad () {
      dispatch(actionCreator.loadMoreArticles())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(List)
