import React from 'react';
import store from '../../redux/store';
import TodoHeader from '../../components/todo-header';
import TodoList from '../../components/todo-list';
import TodoFooter from '../../components/todo-footer';
import './index.css';

export default class TodoPage extends React.Component {
  state = store.getState();

  componentWillMount() {
    store.subscribe(() => {
      const { todos, completedCount } = store.getState();
      this.setState({
        todos,
        completedCount
      });
    });
  }

  render() {
    const { todos, completedCount } = this.state;

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <TodoHeader/>
          <TodoList todos={todos}/>
          <TodoFooter completedCount={completedCount} totalCount={todos.length}/>
        </div>
      </div>
    )
  }
}
