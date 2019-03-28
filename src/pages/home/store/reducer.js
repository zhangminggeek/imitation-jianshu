import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: []
});

export default (state = defaultState, actions) => {
  switch (actions.type) {
    case actionTypes.CHANGE_TOPIC_LIST:
      return state.set('topicList', actions.list);
    default:
      return state
  }
}
