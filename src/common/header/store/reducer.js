import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false
});

export default (state = defaultState, actions) => {
  if (actions.type === actionTypes.FOCUS_STATE_CHANGE) {
    return state.set('focused', actions.state);
  }
  return state
}
