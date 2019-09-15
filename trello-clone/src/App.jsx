import React from 'react';
import './App.scss';
import { BoardList } from './board-list';
import { TrelloCloneConstants } from './util';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newBoard: false,
      newBoardTitle: '',
      boards: [
        {
          title: 'AshKeys',
          todo: [
            {
              title: 'bla',
              description: 'bla bla'
            }
          ],
          inProgress: [{ title: 'bla', description: 'bla bla' }],
          done: [{ title: 'bla', description: 'bla bla' }]
        }
      ]
    };
  }

  componentWillMount() {
    !sessionStorage.getItem(TrelloCloneConstants.BOARDS) &&
      sessionStorage.setItem(
        TrelloCloneConstants.BOARDS,
        JSON.stringify(this.state.boards)
      );
  }

  toggleNewBoard = () => {
    this.setState({
      newBoard: !this.state.newBoard
    });
  };

  addNewBoard = (e) => {
    e.preventDefault();
    const boards = [
      ...this.state.boards,
      { title: this.state.newBoardTitle, todo: [], inProgress: [], done: [] }
    ];
    this.setState({
      boards,
      newBoardTitle: ''
    });
    sessionStorage.setItem(TrelloCloneConstants.BOARDS, JSON.stringify(boards));

    this.render();
  };

  onTitleEnter = ({ target: { value } }) =>
    this.setState({
      newBoardTitle: value
    });

  render() {
    return (
      <div className="App">
        <div
          hidden={this.state.newBoard}
          className="board-new-tile"
          onClick={this.toggleNewBoard}
        >
          <h3 className="board-new-tile__title">Create a new board...</h3>
        </div>
        <div className="board-new-tile" hidden={!this.state.newBoard}>
          <h3 className="board-new-tile__title">Creating a new board...</h3>
          <form
            className="board-new-form"
            noValidate
            onSubmit={this.addNewBoard}
            onReset={this.toggleNewBoard}
          >
            <input
              className="board-new-form__input"
              type="text"
              name="title"
              placeholder="Please enter a title..."
              value={this.state.newBoardTitle}
              onChange={this.onTitleEnter}
              required
            />
            <button className="board-new-form__button--reset" type="reset">
              Cancel
            </button>
            <button className="board-new-form__button--submit" type="submit">
              Create
            </button>
          </form>
        </div>
        <BoardList boards={this.state.boards} />
      </div>
    );
  }
}

export default App;
