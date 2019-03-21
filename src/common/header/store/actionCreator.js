import * as actionType from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

// 修改聚焦状态
export const focusStateChange = (state) => {
  return {
    type: actionType.FOCUS_STATE_CHANGE,
    state
  }
};

// 修改热门列表
export const changeList = (list) => {
  return {
    type: actionType.CHANGE_LIST,
    list: fromJS(list)
  }
};

// 获取热门列表
export const getList = () => {
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5c7b889bd764b271d20aca86/list').then(res => {
      const data = res.data;
      if (data.success) dispatch(changeList(data.data));
    })
  }
};
