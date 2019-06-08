import React from 'react';
import PropTypes from 'prop-types';
import store from '../../redux/store';
import { removeCompletedTodos, checkedAllTodos } from '../../redux/actions';
import './index.css';

export default class TodoFooter extends React.Component {
  static propTypes = {
    completedCount: PropTypes.number.isRequired,
    totalCount: PropTypes.number.isRequired
  };

  render() {
    const { completedCount, totalCount } = this.props;
    const allTodosChecked = completedCount === totalCount;

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox"
                 checked={allTodosChecked}
                 onChange={()=>store.dispatch(checkedAllTodos(allTodosChecked))}/>
          <span>已完成{completedCount}件</span> / 总计{totalCount}件
        </label>
        <button className="btn btn-warning"
                onClick={()=>store.dispatch(removeCompletedTodos())}>清除已完成任务</button>
      </div>
    )
  }
}
