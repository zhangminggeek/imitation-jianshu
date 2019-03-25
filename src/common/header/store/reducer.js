import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  mouseInState: false,
  list: [], // 热门搜索列表
  page: 1,
  totalPages: 1
});

export default (state = defaultState, actions) => {
  switch (actions.type) {
    case actionTypes.FOCUS_STATE_CHANGE:
      return state.set('focused', actions.state);
    case actionTypes.MOUSE_IN_STATE_CHANGE:
      return state.set('mouseInState', actions.state);
    case actionTypes.CHANGE_LIST:
      return state.merge({
        list: actions.list,
        totalPages: actions.length,
      });
      /*
      // 等价于
      return state
        .set('list', actions.list)
        .set('totalPages', actions.length);
       */
    case actionTypes.CHANGE_PAGE:
      return state.set('page', actions.page);
    default:
      return state
  }
}
