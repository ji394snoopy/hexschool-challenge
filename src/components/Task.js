import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import * as SIcons from '@fortawesome/fontawesome-free-solid';
import * as RIcons from '@fortawesome/fontawesome-free-regular';

function StatusBar(props) {
  return (
    <div className="statusBar">
      <span
        className={(!props.status.deadline ? 'invisible' : '') + ' calendar'}
      >
        <FontAwesomeIcon icon={RIcons.faCalendarAlt} size="1x" />
      </span>
      <span className={!props.status.deadline ? 'invisible' : ''}>
        {props.status.deadline}
      </span>
      <span className={(!props.status.files ? 'invisible' : '') + ' files'}>
        <FontAwesomeIcon icon={RIcons.faFileAlt} size="1x" />
      </span>
      <span className={(!props.status.comment ? 'invisible' : '') + ' comment'}>
        <FontAwesomeIcon icon={RIcons.faCommentDots} size="1x" />
      </span>
    </div>
  );
}

class StatusEdit extends Component {
  constructor(props) {
    super(props);
    const dtArr = (this.props.status.deadline || '').split(' ');
    const d = (dtArr && dtArr[0]) || '';
    const t = (dtArr && dtArr.length >= 2 && dtArr[1]) || '';
    this.state = {
      deadlineDate: d,
      deadlineTime: t,
      files: this.props.status.files || undefined,
      comment: this.props.status.comment || ''
    };
  }

  render() {
    return (
      <div>
        <div className="statusEdit">
          <div>
            <div>
              <span className="calendar">
                <FontAwesomeIcon icon={RIcons.faCalendarAlt} size="1x" />
              </span>
              <b>DeadLine</b>
            </div>
            <input
              type="text"
              value={this.state.deadlineDate}
              placeholder="yyyy/MM/dd"
            />
            <input
              type="text"
              value={this.state.deadlineTime}
              placeholder="HH:mm"
            />
          </div>
          <div>
            <div>
              <span className="files">
                <FontAwesomeIcon icon={RIcons.faFileAlt} size="1x" />
              </span>
              <b>File</b>
            </div>
            <label htmlFor={this.props.key + 'addFile'} className="addFile">
              <a className="plus-square">
                <FontAwesomeIcon icon={SIcons.faPlusSquare} size="3x" />
              </a>
              <input
                type="file"
                value={this.state.files}
                id={this.props.key + 'addFile'}
                className="invisible"
              />
            </label>
          </div>
          <div>
            <div>
              <span className="comment">
                <FontAwesomeIcon icon={RIcons.faCommentDots} size="1x" />
              </span>
              <b>Comment</b>
            </div>
            <textarea
              value={this.state.comment}
              placeholder="Type your memo here…"
            />
          </div>
        </div>

        <div className="btns">
          <div className="cancel" onClick={this.props.cancel}>
            X Cancel
          </div>
          <div
            className="add"
            // onClick="this.update"
          >
            + Add Task
          </div>
        </div>
      </div>
    );
  }
}

class Task extends Component {
  constructor(props) {
    super(props);
    console.log(props.task);
    this.state = props.task || {
      taskName: 'Type Something Here…',
      isDone: false,
      isEdit: false,
      isImportant: false,
      status: {
        deadline: null,
        files: null,
        comment: ''
      }
    };
  }

  cancelEdit() {
    this.setState({ isEdit: false });
  }

  update(k, v) {
    let tmp = {};
    tmp[k] = v;
    this.setState(tmp);
  }

  updates(ks, vs) {
    let tmp = {};
    ks.forEach((k, i) => (tmp[k] = vs[i]));
    this.setState(tmp);
  }

  render() {
    return (
      <div className={(this.state.isImportant ? 'active' : '') + ' Task'}>
        <div className="taskHeader">
          <label
            htmlFor={this.props.id + 'isDone'}
            className={(this.state.isDone ? 'active' : '') + ' check-square'}
          >
            <FontAwesomeIcon
              icon={this.state.isDone ? SIcons.faCheckSquare : RIcons.faSquare}
              size="1x"
            />
            <input
              id={this.props.id + 'isDone'}
              type="checkbox"
              value={!!this.state.isDone}
              onClick={() => this.update('isDone', !this.state.isDone)}
            />
          </label>

          <span className={(this.state.isDone ? 'del' : '') + ' title'}>
            {this.state.taskName}
          </span>
          <div className="icons">
            <a
              className={(this.state.isImportant ? 'active' : '') + ' star'}
              onClick={() =>
                this.update('isImportant', !this.state.isImportant)
              }
            >
              <FontAwesomeIcon
                icon={this.state.isImportant ? SIcons.faStar : RIcons.faStar}
                size="1x"
              />
            </a>
            <a
              className={(this.state.isEdit ? 'active' : '') + ' edit'}
              onClick={() => this.update('isEdit', !this.state.isEdit)}
            >
              <FontAwesomeIcon icon={SIcons.faPencilAlt} size="1x" />
            </a>
          </div>
        </div>
        {this.state.isEdit ? (
          <StatusEdit
            status={this.state.status || {}}
            id={this.props.id}
            cancel={() => this.update('isEdit', false)}
          />
        ) : (
          <StatusBar status={this.state.status || {}} />
        )}
      </div>
    );
  }
}

export default Task;
