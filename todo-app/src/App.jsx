import React from 'react';
import './App.css';
import { TodoList } from './todo-list/todo-list';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: '',
      todos: [
        'Schoonmaken',
        'Boodschappen doen',
        'Espanol Oefeningen',
        'podcast Luisteren'
      ]
    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ newTodo: value });
  };

  addNewTodo(e) {
    e.preventDefault();

    this.state.newTodo &&
      this.setState({
        todos: [...this.state.todos, this.state.newTodo],
        newTodo: ''
      });
  }

  removeTodo(index) {
    this.setState({
      todos: [...this.state.todos.filter((_value, i) => i !== index)]
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form
            className="todo-new"
            noValidate
            onSubmit={(e) => this.addNewTodo(e)}
          >
            <input
              className="todo-new__input"
              type="text"
              name="todo-new"
              id="todo-new"
              value={this.state.newTodo}
              onChange={(e) => this.handleChange(e)}
            />
            <button
              className="todo-new__add"
              onClick={(e) => this.addNewTodo(e)}
            >
              Add
            </button>
          </form>

          <TodoList
            todos={this.state.todos}
            removeTodo={(i) => this.removeTodo(i)}
          />
        </header>
      </div>
    );
  }
}

export default App;
