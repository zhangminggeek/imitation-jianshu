import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

export const changeLoginState = (state) => ({
  type: actionTypes.CHANGE_LOGIN_STATE,
  state: fromJS(state)
});

export const login = (account, password) => {
  return (dispatch) => {
    const param = {
      account,
      password
    };
    axios.post('https://www.easy-mock.com/mock/5c7b889bd764b271d20aca86/login', param).then(res => {
      const data = res.data;
      if (data.success) {
        dispatch(changeLoginState(data.data));
      }
    })
  }
};
