import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  list: [] // 热门搜索列表
});

export default (state = defaultState, actions) => {
  switch (actions.type) {
    case actionTypes.FOCUS_STATE_CHANGE:
      return state.set('focused', actions.state);
    case actionTypes.CHANGE_LIST:
      return state.set('list', actions.list);
    default:
      return state
  }
}
