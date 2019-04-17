import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  isLogin: false
});

export default (state = defaultState, actions) => {
  switch (actions.type) {
    case actionTypes.CHANGE_LOGIN_STATE:
      return state.set('isLogin', actions.state);
    default:
      return state
  }
}
