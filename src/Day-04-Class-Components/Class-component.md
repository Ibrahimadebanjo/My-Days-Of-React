# Class Components 
Before React introduced functional components with Hooks, class components were the primary way to build components in React, especially when you needed to manage state and lifecycle methods. While functional components are more common today, class components are still widely used and an essential part of React's history and ecosystem.

What is a React Class Component?
A React class component is a JavaScript class that extends from React.Component. It requires the render() method to return JSX, and it can manage its own internal state, handle props, and have access to React’s lifecycle methods.

Class components are more powerful than the simpler functional components (before hooks), because they allowed:

1. State management.
2. Lifecycle methods to control the behavior of the component at different stages (mounting, updating, unmounting).


from Asabeneh docs 

Let's put all the class based components together in one file.

// class base component

```js
class Header extends React.Component {
  constructor(props) {
    super(props)
    // the code inside the constructor run before any other code
  }
  render() {
    return (
      <header>
        <div className='header-wrapper'>
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <p>Asabeneh Yetayeh</p>
          <small>Oct 7, 2020</small>
        </div>
      </header>
    )
  }
}

// TechList Component
// class base component
class TechList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const techs = ['HTML', 'CSS', 'JavaScript']
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

// Main Component
// Class Component
class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <main>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList />
          </ul>
        </div>
      </main>
    )
  }
}

// Footer Component
// Class component
class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright 2020</p>
        </div>
      </footer>
    )
  }
}

// The App, or the parent or the container component
// Class Component
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='app'>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

```
GPT 

```js
import React, { Component } from 'react';

class MyComponent extends Component {
  // State can be defined in class components
  constructor(props) {
    super(props);  // We call `super` to access `this.props`
    this.state = {
      count: 0
    };
  }

  // Method to handle state changes
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // The render method returns the JSX to be displayed
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;
```
## Accessing props in Class components

We stated that props is a means to send data from on component to another or we can call it that props is a data carrier. Therefore, we should handle props in class based component too. We can access props of a class based component using the keyword _this_. See the example below.

```js
import React from 'react'
import ReactDOM from 'react-dom'

// class based component
class Header extends React.Component {
  constructor(props) {
    super(props)
    // the code inside the constructor run before any other code
  }
  render() {
    return (
      <header>
        <div className='header-wrapper'>
          <h1>{this.props.data.welcome}</h1>
          <h2>{this.props.data.title}</h2>
          <h3>
            {this.props.data.author.firstName} {this.props.data.author.lastName}
          </h3>
          <small>{this.props.data.date}</small>
        </div>
      </header>
    )
  }
}
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: 'Oct 7, 2020',
  }

  return (
    <div className='app'>
      <Header data={data} />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```
personal Example

```js
import React, { Component } from 'react';
class Class2 extends React.Component {
 constructor(props){
    super(props);
 }
 render(){
    return(
        <div>
            <h1>my name is {this.props.data.name}</h1>
            <p> I am {this.props.data.age} Years old! </p>
        </div>
    )
 }
}
export default Class2;

```
## Methods in Class based component

We access methods in class based component. Most of the time, we write different methods on the parent component and we pass them to child components. Let's see the implementation.

```js
import React, {Component } from "react";

class Class extends Component {
// State can be defined in class components
    constructor(props){
        super(props); // We call `super` to access `this.props`
        this.state = {
            count : 0
    }

}

   incrementCount = () => {
    this.setState({count: this.state.count + 1});
}

render() {
    return (
        <div>
<h1> Count : {this.state.count}</h1>
<button onClick={this.incrementCount}>increment</button>
        </div>
    )
}
}
export default Class


// class based component
class Header extends React.Component {
  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }
  render() {
    return (
      <header>
        <div className='header-wrapper'>
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <p>Asabeneh Yetayeh</p>
          <small>Oct 7, 2020</small>
          <button onClick={this.greetPeople}> Greet </button>
        </div>
      </header>
    )
  }
}

```
React Class Components: Detailed Explanation
Before React introduced functional components with Hooks, class components were the primary way to build components in React, especially when you needed to manage state and lifecycle methods. While functional components are more common today, class components are still widely used and an essential part of React's history and ecosystem.

What is a React Class Component?
A React class component is a JavaScript class that extends from React.Component. It requires the render() method to return JSX, and it can manage its own internal state, handle props, and have access to React’s lifecycle methods.

Class components are more powerful than the simpler functional components (before hooks), because they allowed:

State management.
Lifecycle methods to control the behavior of the component at different stages (mounting, updating, unmounting).
Basic Structure of a Class Component
A typical class component looks like this:

jsx
```js
import React, { Component } from 'react';

class MyComponent extends Component {
  // State can be defined in class components
  constructor(props) {
    super(props);  // We call `super` to access `this.props`
    this.state = {
      count: 0
    };
  }

  // Method to handle state changes
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // The render method returns the JSX to be displayed
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;

```
Detailed Breakdown of the Class Component Example:
Class Declaration:

jsx
Copy code
class MyComponent extends Component
Here, MyComponent is a class that extends React.Component. By extending React.Component, the class gains access to React's component functionality, such as state and lifecycle methods.
Constructor and State:

jsx
```js
constructor(props) {
  super(props);
  this.state = { count: 0 };
}

```
In class components, we define state in the constructor.
super(props) is required when defining a constructor, as it calls the parent class (React.Component) constructor, giving you access to this.props.
The state is an object, and we initialized it with { count: 0 }. This means the initial count will be 0.
Handling State Updates:

jsx

```js 

incrementCount = () => {
  this.setState({ count: this.state.count + 1 });
};
To modify the state, we use the setState method.
In the incrementCount method, we update the count property of the state by 1 every time this method is called. React will automatically re-render the component whenever the state changes.
The render() Method:

jsx
Copy code
render() {
  return (
    <div>
      <h1>Count: {this.state.count}</h1>
      <button onClick={this.incrementCount}>Increment</button>
    </div>
  );
}
```
The render() method is mandatory in every class component. It tells React what to display on the screen.
Inside the render method, we return JSX that represents the component's UI.
Here, we display the current count from the state and a button that increments the count when clicked (onClick={this.incrementCount}).
Practical Example of a React Class Component
Let’s go further with a more practical example. We will create a class component that simulates a simple to-do list with stateful management.

jsx
```js
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

```
Detailed Breakdown of the TodoList Component:
State Declaration:

The tasks array stores all the to-do tasks entered by the user.
The currentTask string holds the value of the input field where the user types a new task.
Event Handlers:

handleInputChange: This method updates the currentTask in the state whenever the input value changes. We use event.target.value to capture the current input value.
jsx

```js
handleInputChange = (event) => {
  this.setState({ currentTask: event.target.value });
};

```
addTask: This method is triggered when the user clicks the "Add Task" button. It appends the currentTask to the tasks array and then resets currentTask to an empty string so the input field clears after adding a task.
jsx

```js

addTask = () => {
  if (this.state.currentTask.trim() !== '') {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, prevState.currentTask],
      currentTask: ''
    }));
  }
};

```
Rendering JSX:

The render method contains the following:
An input field that captures new tasks.
A button that adds the current task to the list.
An unordered list (<ul>) that displays the tasks stored in the tasks array. The .map() function iterates over the tasks and renders each task inside an <li>. We use the index as the key here, but in real scenarios, unique IDs are preferred.
Example in Action:
Let’s walk through the flow:

Initially, the tasks state is empty, so nothing is displayed in the list.
The user types a task into the input field (e.g., "Buy groceries"), and the handleInputChange updates the currentTask in the state.
When the "Add Task" button is clicked, the addTask method adds the current task to the tasks array, and the list of tasks re-renders with the new task included.
This continues, allowing the user to add multiple tasks, which are displayed in the list.
Lifecycle Methods in Class Components
Class components also have access to React lifecycle methods, which allow you to hook into specific stages of the component's lifecycle, such as when the component is mounted, updated, or unmounted.

Some common lifecycle methods include:

componentDidMount(): Called once, immediately after the component is added to the DOM. It’s a good place to perform side effects like fetching data from an API.
componentDidUpdate(prevProps, prevState): Called after every update, meaning after the component re-renders due to state or prop changes.
componentWillUnmount(): Called just before the component is removed from the DOM. Useful for cleanup, such as removing event listeners or canceling network requests.
Example using componentDidMount:
jsx

```js
class DataFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true
    };
  }

  componentDidMount() {
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          data: data,
          loading: false
        })
      );
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    return <div>Data: {JSON.stringify(this.state.data)}</div>;
  }
}
```
Conclusion:
Class components are the traditional way of building React components that manage their own state and lifecycle. They use methods like render() to return JSX and can access powerful lifecycle methods like componentDidMount().
Today, most new codebases prefer functional components with Hooks (like useState and useEffect) because they provide all the functionality of class components in a more concise way, but class components are still relevant in many projects


