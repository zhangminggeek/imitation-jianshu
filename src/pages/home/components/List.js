import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../store';
import {
  ListItem,
  ListInfo
} from '../style'

class List extends Component {
  render() {
    const { articleList } = this.props;
    return (
      <div>
        {articleList.map(item => (
          <ListItem key={item.get('id')}>
            <ListInfo>
              <h3 className="title">{item.get('title')}</h3>
              <p className="desc">{item.get('desc')}</p>
            </ListInfo>
            <img className="list-pic" src={item.get('imgUrl')} alt=""/>
          </ListItem>
        ))}
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
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(List)
