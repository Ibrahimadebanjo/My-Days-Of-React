import React, { Component } from 'react';

class TodoList extends Component {
  // Initialize the state with an empty array for tasks and an empty input field
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      currentTask: ''
    };
  }

  // Handle the input change to update the currentTask in the state
  handleInputChange = (event) => {
    this.setState({ currentTask: event.target.value });
  };

  // Add the new task to the task list and reset the input field
  addTask = () => {
    if (this.state.currentTask.trim() !== '') {
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, prevState.currentTask],
        currentTask: ''
      }));
    }
  };

  // Render the component
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        {/* Input for adding new task */}
        <input
          type="text"
          value={this.state.currentTask}
          onChange={this.handleInputChange}
          placeholder="Enter a new task"
        />
        {/* Button to add the task */}
        <button onClick={this.addTask}>Add Task</button>

        {/* Display the list of tasks */}
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
