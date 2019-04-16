import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

export const changeArticleTitle = (title) => ({
  type: actionTypes.CHANGE_ARTICLE_TITLE,
  title: fromJS(title)
});

export const changeArticleContent = (content) => ({
  type: actionTypes.CHANGE_ARTICLE_CONTENT,
  content: fromJS(content)
});

export const getArticleInfo = () => {
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5c7b889bd764b271d20aca86/article/info').then(res => {
      const data = res.data;
      if (data.success) {
        dispatch(changeArticleTitle(data.data.title));
        dispatch(changeArticleContent(data.data.content));
      }
    })
  }
};
