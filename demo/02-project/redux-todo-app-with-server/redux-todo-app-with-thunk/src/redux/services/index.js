import { fetch }from '../../utils';
import { getAllTodos } from '../actions';

// 使用redux-thunk
export const getTodoList = () => (dispatch) => {
  const promise = fetch('/api/todos');
  promise.then(res => {
    if(res.success) {
      dispatch(getAllTodos(res.data));
    }
  });
};
