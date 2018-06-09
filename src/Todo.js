import React, { Component } from 'react';

class Todo extends Component {
  render() {
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
        </section>
      </div>
    );
  }
}

export default Todo;
