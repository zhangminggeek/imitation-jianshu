import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

// 修改topic列表
export const changeTopicList = (list) => ({
  type: actionTypes.CHANGE_TOPIC_LIST,
  list: fromJS(list)
});

// 修改article列表
export const changeArticleList = (list) => ({
  type: actionTypes.CHANGE_ARTICLE_LIST,
  list: fromJS(list)
});

// 添加更多article列表
export const addArticle = (list) => ({
  type: actionTypes.ADD_ARTICLE,
  list: fromJS(list)
});

// 修改recommend列表
export const changeRecommendList = (list) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  list: fromJS(list)
});

// 修改回到顶部按钮显示状态
export const changeShowScrollTopState = (state) => ({
  type: actionTypes.CHANGE_SCROLL_TOP_BUTTON_STATE,
  state: fromJS(state)
});

// 获取topic列表
export const getTopicList = () => {
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5c7b889bd764b271d20aca86/topic/list').then(res => {
      const data = res.data;
      if (data.success) dispatch(changeTopicList(data.data))
    })
  }
};

// 获取article列表
export const getArticleList = () => {
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5c7b889bd764b271d20aca86/article/list').then(res => {
      const data = res.data;
      if (data.success) dispatch(changeArticleList(data.data))
    })
  }
};

// 加载更多article列表
export const loadMoreArticles = () => {
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5c7b889bd764b271d20aca86/article/list').then(res => {
      const data = res.data;
      if (data.success) dispatch(addArticle(data.data))
    })
  }
};

// 获取recommend列表
export const getRecommendList = () => {
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5c7b889bd764b271d20aca86/recommend/list').then(res => {
      const data = res.data;
      if (data.success) dispatch(changeRecommendList(data.data))
    })
  }
};
