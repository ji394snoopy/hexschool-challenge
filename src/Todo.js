import React, { Component } from 'react';
import Task from './components/Task';
import './style/Todo.css';
import testData from './testData';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    this.updateTask = this.updateTask.bind(this);
    this.updateTaskStatus = this.updateTask.bind(this);
  }

  componentDidMount() {
    this.setState({
      tasks: testData.todos
    });
  }

  toggleCheck() {}

  updateTask(_task, _status) {
    const id = _task.id;
    const status = {
      deadline:
        _status.deadlineDate +
        (!(_status.deadlineDate && _status.deadlineDate) || ' ') +
        _status.deadlineTime,
      files: _status.files || null,
      comment: _status.comment || ''
    };
    const task = _task;
    task.isEdit = false;
    task.status = status;
    this.setState(prev => prev.tasks.splice(id, 1, task));
  }

  updateTaskStatus(t, k, v) {
    const id = t.id;
    const task = t;
    t[k] = v;
    this.setState(prev => prev.tasks.splice(id, 1, task));
  }

  render() {
    const taskList = this.state.tasks
      .sort(
        (a, b) => a.isImportant * 2 - a.isDone < b.isImportant * 2 - b.isDone
      )
      .map((t, i) => {
        t.id = i;
        return (
          <Task
            key={i}
            task={t}
            updateTask={this.updateTask}
            updateStatus={this.updateTaskStatus}
          />
        );
      });
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
