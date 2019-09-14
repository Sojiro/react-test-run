import React from 'react';
import './App.scss';
import { BoardList } from './board-list';
import { TrelloCloneConstants } from './util';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
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

  componentDidMount() {
    sessionStorage.setItem(
      TrelloCloneConstants.BOARDS,
      JSON.stringify(this.state.boards)
    );
  }

  render() {
    return (
      <div className="App">
        <div className="board-new-item">
          <h3 className="board-new-item__title"> Create new board...</h3>
        </div>
        <BoardList />
      </div>
    );
  }
}

export default App;
