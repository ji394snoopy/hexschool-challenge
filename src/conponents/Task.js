import React, { Component } from 'react';

function StatusBar(props) {
  return (
    <div>
      <span classNmae="!props.deadline&&'invisible'">
        {/* calendar icon */}
      </span>
      <span classNmae="!props.deadline&&'invisible'">{props.deadline}</span>
      <span classNmae="!props.files&&'invisible'">{/* file icon */}</span>
      <span classNmae="!props.comment&&'invisible'">{/* comment icon */}</span>
    </div>
  );
}

class StatusEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadlineDate: '',
      deadlineTime: '',
      files: null,
      comment: ''
    };
  }
  componentDidMount() {
    const dtArr = (this.props.deadline || '').split(' ');
    const d = (dtArr && dtArr[0]) || '';
    const t = (dtArr && dtArr.length >= 2 && dtArr[1]) || '';
    this.setState({
      deadlineDate: d,
      deadlineTime: t,
      files: this.props.files || null,
      comment: this.props.comment || ''
    });
  }
  render() {
    return (
      <div>
        {/* edit */}
        <div>
          <div>
            <span>{/* calendar icon */}</span> <b>DeadLine</b>
            <input
              type="text"
              value="{this.state.deadlineDate}"
              placeholder="yyyy/MM/dd"
              className="inline-input"
            />
            <input
              type="text"
              value="{this.state.deadlineTime}"
              placeholder="HH:mm"
              className="inline-input"
            />
          </div>
          <div>
            <span>{/* file icon */}</span> <b>File</b>
            <label htmlFor="addFile">
              <a>{/* add icon */}</a>
              <input
                type="file"
                value="this.state.files"
                name="addFile"
                className="invisible"
              />
            </label>
          </div>
          <div>
            <span>{/* comment icon */}</span> <b>Comment</b>
            <textarea value="this.state.comment" />
          </div>
        </div>
        {/* btns */}
        <div>
          <div className="cancel" onClick="this.props.cancel()">
            X Cancel
          </div>
          <div className="add" onClick="this.update">
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
    this.state = {
      task: {}
    };
  }

  componentDidMount() {
    this.setState({
      task: this.props.task || {
        taskName: 'Type Something Here…',
        isDone: false,
        isEdit: false,
        isImportant: false,
        status: {
          deadLine: null,
          files: null,
          comment: ''
        }
      }
    });
  }

  render() {
    return (
      <div className="{(this.props.isImportant?'important':'')+' task'}">
        <div>
          <input
            type="checkbox"
            value="{!!this.props.isDone}"
            onChange="()=> this.props.onChange('isDone')"
          />
          <span className="this.props.isDone&&'del'">
            {this.props.taskName}
          </span>
          <a className="{this.props.isImportant&&'active'}">
            {/* important icon */}
          </a>
          <a className="{this.props.isEdit&&'active'}">{/* edit icon */}</a>
        </div>
        {!!this.props.isEdit && <StatusEdit status="{this.props.status||{}}" />}
        {!this.props.isEdit && <StatusBar status="{this.props.status||{}}" />}
      </div>
    );
  }
}

export default Task;
