import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  a: {
    title: '',
    content: ''
  },
  title: '',
  content: ''
});

export default (state = defaultState, actions) => {
  switch (actions.type) {
    case actionTypes.CHANGE_ARTICLE_TITLE:
      return state.set('title', actions.title);
    case actionTypes.CHANGE_ARTICLE_CONTENT:
      return state.set('content', actions.content);
    default:
      return state
  }
}
