import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../todo-item';
import './index.css';

export default class TodoList extends React.Component {
  static propTypes = {
    todos: PropTypes.array.isRequired
  };

  render() {
    const { todos } = this.props;
    
    return (
      <ul className="todo-list">
        {
          todos.map(item => (
            <TodoItem key={item.id} todo={item}/>
          ))
        }
      </ul>
    )
  }
}
