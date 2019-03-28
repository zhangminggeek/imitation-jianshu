import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

// 修改topic列表
export const changeTopicList = (list) => ({
  type: actionTypes.CHANGE_TOPIC_LIST,
  list: fromJS(list)
});

// 获取topic列表
export const getTopicList = () => {
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5c7b889bd764b271d20aca86/topic/list').then(res => {
      const data = res.data;
      if (data.success) dispatch(changeTopicList(data.data))
    })
  }
};
