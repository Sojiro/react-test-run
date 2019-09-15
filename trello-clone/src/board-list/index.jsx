import React from 'react';
import { Link } from 'react-router-dom';
import { TrelloCloneConstants } from '../util';
import './board-list.scss';

export class BoardList extends React.Component {
  componentWillMount() {
    this.setState({
      boards:
        JSON.parse(sessionStorage.getItem(TrelloCloneConstants.BOARDS)) || []
    });
  }

  render() {
    return (
      <section>
        <h1>Boards</h1>
        <div className="boardlist">
          {this.state.boards.map((board, index) => (
            <Link to={'/boards/' + index}>
              <div className="boardlist-tile">
                <h3 className="boardlist-tile__title">{board.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    );
  }
}
