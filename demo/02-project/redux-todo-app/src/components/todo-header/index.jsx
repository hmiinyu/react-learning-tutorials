import React from 'react';
import { dispatch } from '../../utils';
import { addTodo } from '../../redux/actions';
import './index.css';

export default class TodoHeader extends React.Component {
  handleAddTodo(e) {
    if (e.keyCode === 13) {
      const value = e.target.value.trim();
      if (value.length) {
        dispatch(addTodo({ name: value, compeleted: false }));
        e.target.value = '';
      }
    }
  }

  render() {
    return (
      <div className="todo-header">
        <input type="text" 
               placeholder="请输入今天的任务清单，按回车键确认"
               onKeyDown={e=>this.handleAddTodo(e)}/>
      </div>
    )
  }
}
