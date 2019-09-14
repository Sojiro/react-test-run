import React from 'react';
import { TrelloCloneConstants } from '../util';
import { NotFound } from '../util/not-found';
import './board.scss';
import { TaskList } from './task-list';

export class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      boards:
        JSON.parse(sessionStorage.getItem(TrelloCloneConstants.BOARDS)) || []
    };
  }

  render() {
    const { params } = this.props.match;
    console.log({ params });
    const board = this.state.boards.find(
      (_board, i) => Number(params.id) === i
    );
    if (board) {
      return (
        <div className="board">
          <h1 className="board-title">{board.title}</h1>
          <div className="board-items">
            <div className="board-todo">
              <h3>TO DO</h3>
              <TaskList tasks={board.todo} />
            </div>
            <div className="board-inprogress">
              <h3>In Progress</h3>
              <TaskList tasks={board.inProgress} />
            </div>
            <div className="board-done">
              <h3>DONE</h3>
              <TaskList tasks={board.done} />
            </div>
          </div>
        </div>
      );
    } else {
      return <NotFound />;
    }
  }
}
