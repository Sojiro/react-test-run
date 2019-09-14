import React from 'react';
import './task-list.scss';

export class TaskList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return this.props.tasks.map((task) => (
      <div className="task">
        <div className="task-header">{task.title}</div>
        <div className="task-description">{task.description}</div>
      </div>
    ));
  }
}
