import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [],
  articleList: []
});

export default (state = defaultState, actions) => {
  switch (actions.type) {
    case actionTypes.CHANGE_TOPIC_LIST:
      return state.set('topicList', actions.list);
    case actionTypes.CHANGE_ARTICLE_LIST:
      return state.set('articleList', actions.list);
    default:
      return state
  }
}
