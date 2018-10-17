const todos = [
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

export default {
  todos
};
