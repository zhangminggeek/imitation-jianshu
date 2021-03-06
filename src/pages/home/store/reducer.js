import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  showScrollTopButton: false
});

export default (state = defaultState, actions) => {
  switch (actions.type) {
    case actionTypes.CHANGE_TOPIC_LIST:
      return state.set('topicList', actions.list);
    case actionTypes.CHANGE_ARTICLE_LIST:
      return state.set('articleList', actions.list);
    case actionTypes.ADD_ARTICLE:
      return state.set('articleList', state.get('articleList').concat(actions.list));
    case actionTypes.CHANGE_RECOMMEND_LIST:
      return state.set('recommendList', actions.list);
    case actionTypes.CHANGE_SCROLL_TOP_BUTTON_STATE:
      return state.set('showScrollTopButton', actions.state);
    default:
      return state
  }
}
