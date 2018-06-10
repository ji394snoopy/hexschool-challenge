import React, { Component } from 'react';
import Task from './conponents/Task';

const init_tasks = [
  {
    taskName: 'this is a task',
    isDone: false,
    isChecked: true,
    isEdit: false,
    isImportant: false,
    status: {
      deadLine: null,
      files: null,
      comment: 'hello world !'
    }
  },
  {
    taskName: 'this is a task',
    isDone: false,
    isChecked: false,
    isEdit: false,
    isImportant: true,
    status: {
      deadLine: null,
      files: null,
      comment: 'hello world !'
    }
  },
  {
    taskName: 'this is a task',
    isDone: true,
    isChecked: false,
    isEdit: false,
    isImportant: false,
    status: {
      deadLine: null,
      files: null,
      comment: 'hello world !'
    }
  }
];

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    this.setState({
      tasks: init_tasks
    });
  }

  toggleCheck() {}

  render() {
    const taskList = this.state.tasks.map(t => <Task task="{t}" />);

    return (
      <div className="Todo">
        <header>
          <nav>
            <ul>
              <li>
                <span className="nav-label">My Tasks</span>
              </li>
              <li>
                <span className="nav-label">In Progress</span>
              </li>
              <li>
                <span className="nav-label">Completed</span>
              </li>
            </ul>
          </nav>
        </header>

        <section className="container">
          <div className="add" />
          <div>{taskList}</div>
        </section>
      </div>
    );
  }
}

export default Todo;
