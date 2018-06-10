import React, { Component } from 'react';
import Task from './conponents/Task';
import './style/Todo.css';

const init_tasks = [
  {
    taskName: 'this is a task',
    isDone: false,
    isChecked: true,
    isEdit: false,
    isImportant: false,
    status: {
      deadline: null,
      files: null,
      comment: 'hello world !'
    }
  },
  {
    taskName: 'this is a task',
    isDone: false,
    isChecked: false,
    isEdit: true,
    isImportant: true,
    status: {
      deadline: '5/19',
      files: null,
      comment: ''
    }
  },
  {
    taskName: 'this is a task',
    isDone: true,
    isChecked: false,
    isEdit: false,
    isImportant: false,
    status: {
      deadline: null,
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
    const taskList = this.state.tasks.map((t, i) => (
      <Task key={i} task={t} id={i} />
    ));
    const undoCnt = this.state.tasks.filter(t => !t.isDone).length;

    return (
      <div className="Todo">
        <header>
          <nav>
            <ul>
              <li className="active">
                <a className="nav-label">My Tasks</a>
              </li>
              <li>
                <a className="nav-label">In Progress</a>
              </li>
              <li>
                <a className="nav-label">Completed</a>
              </li>
            </ul>
          </nav>
        </header>

        <section className="container">
          <div className="add" />
          <div>{taskList}</div>
          <div className="ps">{undoCnt} tasks left</div>
        </section>
      </div>
    );
  }
}

export default Todo;
