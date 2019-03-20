import * as actionType from './actionTypes';

export const focusStateChange = (state) => {
  return {
    type: actionType.FOCUS_STATE_CHANGE,
    state
  }
}
