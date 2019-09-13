import React from 'react';
import './todo-list.css';

export class TodoList extends React.Component {
  render() {
    return (
      <div className="todo-list">
        {this.props.todos.map((todo, index) => (
          <div className="todo-list__item" key={index}>
            <span>{todo}</span>
            <span
              className="todo-list__item--remove"
              onClick={() => this.props.removeTodo(index)}
            >
              x
            </span>
          </div>
        ))}
      </div>
    );
  }
}
