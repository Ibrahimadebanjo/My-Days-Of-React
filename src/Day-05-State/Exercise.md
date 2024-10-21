### Exercises: Level 1

1. What was your state today? Are you happy? I hope so. If you manage to make it this far you should be happy.
2. What is state in React ?
3. What is the difference between props and state in React ?
4. How do you access state in a React component ?
5. How do you set a set in a React component ?



Absolutely! Let’s break down the specific parts of the code that handle toggling between light and dark modes, updating the body background and text color, and cleaning up styles when the component is unmounted. I’ll explain each part in detail.

1. Method to Toggle Between Light and Dark Modes
This is the function responsible for switching between light mode and dark mode:

jsx
```js
toggleTheme = () => {
  this.setState((prevState) => ({
    isDarkMode: !prevState.isDarkMode  // Toggle the boolean value
  }));
};
```
Explanation:
Purpose: The toggleTheme method is responsible for flipping the mode between light and dark. It works by toggling the isDarkMode state, which stores a boolean value.
```js
this.setState(): 
```
This is the key function for updating the component's state in class-based components. Here, we use setState to update the isDarkMode state based on its current value.

prevState:

When calling this.setState(), we pass a function instead of an object. This is necessary because this.setState() is asynchronous, and using a function ensures that we have the latest state value.
prevState is the previous state of the component before the update.
Toggling the State:

!prevState.isDarkMode inverts the current value of isDarkMode.
If isDarkMode is true (dark mode), !prevState.isDarkMode becomes false (light mode), and vice versa. This flipping mechanism allows us to toggle between light and dark modes with each click.

Example:

Initial State: isDarkMode = false (light mode).
1. Click the Button: toggleTheme is called, and this.setState({ isDarkMode: !prevState.isDarkMode }) runs.
prevState.isDarkMode is false, so !false becomes true.
Now isDarkMode becomes true (dark mode).
2. Click Again: toggleTheme is called again.
prevState.isDarkMode is true, so !true becomes false.
Now isDarkMode becomes false (light mode).
Each time the button is clicked, toggleTheme toggles the state back and forth between light and dark modes.

2. Update the Body Background Color and Text Color Based on the Mode

The code that handles updating the background and text color is inside the componentDidUpdate lifecycle method:

jsx
```js
componentDidUpdate(prevProps, prevState) {
  if (prevState.isDarkMode !== this.state.isDarkMode) {
    document.body.style.backgroundColor = this.state.isDarkMode ? '#333' : '#fff';
    document.body.style.color = this.state.isDarkMode ? '#fff' : '#000';
  }
}
```
Explanation:
Purpose: This lifecycle method is used to apply the correct background and text color based on whether the page is in dark mode or light mode. Every time the isDarkMode state changes (i.e., the user toggles between modes), this method updates the page's appearance accordingly.

1. componentDidUpdate:

This is one of React’s lifecycle methods for class components. It runs after every update (i.e., after the component re-renders due to a state or prop change).
It receives two arguments:
1. prevProps: The previous props (before the update).
2. prevState: The previous state (before the update).
Condition:

jsx
```js
if (prevState.isDarkMode !== this.state.isDarkMode) 
```
This checks if the isDarkMode state has changed since the last render.
We only want to apply the style changes if the value of isDarkMode has been toggled. If the state hasn't changed, the method won't execute the style updates.
Updating the body Styles:

jsx
```js
document.body.style.backgroundColor = this.state.isDarkMode ? '#333' : '#fff';
document.body.style.color = this.state.isDarkMode ? '#fff' : '#000';
```
1. Background Color:
If this.state.isDarkMode is true (dark mode), the background color of the body is set to #333 (a dark gray).
If this.state.isDarkMode is false (light mode), the background color is set to #fff (white).
2. Text Color:
In dark mode (this.state.isDarkMode === true), the text color is set to #fff (white) for better contrast on the dark background.
In light mode (this.state.isDarkMode === false), the text color is set to #000 (black) for better contrast on the white background.
Example:
Initial State:

isDarkMode = false (light mode).
The background color is #fff (white), and the text color is #000 (black).
Switch to Dark Mode:

isDarkMode = true (dark mode).
The background color becomes #333 (dark gray), and the text color becomes #fff (white).
Switch Back to Light Mode:

isDarkMode = false (light mode).
The background color returns to #fff (white), and the text color returns to #000 (black).

3. Clean up the Styles When the Component is Unmounted
This part of the code ensures that when the component is removed from the page, the styles we applied to the body are reset to their original state:

jsx
```js
componentWillUnmount() {
  document.body.style.backgroundColor = '';
  document.body.style.color = '';
}
```
Explanation:
Purpose: When the component is unmounted (i.e., removed from the DOM), we want to clean up any changes we've made to the global styles (like the body's background and text color). This is important to avoid leaving unwanted side effects on the page.

componentWillUnmount:

This is another lifecycle method in class components.
It runs just before the component is removed from the DOM.
Resetting Styles:

jsx
```js
document.body.style.backgroundColor = '';
document.body.style.color = '';
```
By setting the backgroundColor and color properties to an empty string (''), we effectively remove any inline styles we applied to the body.
This ensures that after the component is removed, the page’s background and text colors are reset to whatever they were before the component changed them.
Example of Why This is Important:
Imagine you navigate to another part of your app after using the dark mode toggle, and the component is unmounted. If we didn't clean up the styles, the body would remain dark even though the component managing the dark mode has been removed. By cleaning up, we ensure that these global style changes don’t persist unintentionally.

Summary of the Key Points:
Toggling the Mode (toggleTheme):

The toggleTheme method flips the state between true (dark mode) and false (light mode) using this.setState().
Updating the Background and Text Color (componentDidUpdate):

componentDidUpdate checks whether the isDarkMode state has changed and, if so, updates the body's backgroundColor and color accordingly.
Dark mode sets a dark gray background and white text, while light mode sets a white background and black text.
Cleaning Up Styles (componentWillUnmount):

When the component is removed from the DOM, componentWillUnmount resets the body’s backgroundColor and color to their original values to avoid leaving persistent styles on the page.
This is how the class-based React component effectively handles toggling between light and dark modes, applying changes dynamically and ensuring a clean-up when needed. 

In class-based components in React, managing state involves using several lifecycle methods that allow you to execute code at specific points during the component's lifecycle. These methods fall into three main categories: mounting, updating, and unmounting. React provides specific lifecycle methods to handle these stages, allowing you to interact with the component's state at each point.




Let's explore the lifecycle methods involved in managing state in class-based components and how to use them effectively.

Overview of React Class Lifecycle Methods
Mounting (when the component is first added to the DOM):

constructor(): Used to initialize the component's state.
componentDidMount(): Called after the component is rendered for the first time. Commonly used for fetching data, setting up subscriptions, and initializing state based on side effects.
Updating (when the component re-renders due to a state or prop change):

shouldComponentUpdate(): Controls whether the component should re-render or not.
componentDidUpdate(): Called after the component updates (re-renders). This method is useful for reacting to state or prop changes.
setState(): Used to update the component's state. Triggers a re-render.
Unmounting (when the component is removed from the DOM):

componentWillUnmount(): Called just before the component is unmounted and destroyed. Used for cleanup tasks like removing event listeners or canceling network requests.
1. Mounting: Managing State When a Component is First Rendered
When a component is mounted (added to the DOM), the following lifecycle methods are used for state management:

a) constructor(props):
The constructor is the first method called in a class component, used to initialize the component’s state. It’s also responsible for calling super(props) to allow access to this.props.

Example:

jsx
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);  // Call the parent class constructor
    this.state = {
      count: 0,     // Initializing state
    };
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
      </div>
    );
  }
}
```
b) componentDidMount():
componentDidMount() is invoked immediately after the component is mounted (inserted into the DOM). This is where you should perform side effects such as data fetching, subscribing to events, or initializing state based on external data.

Example: Setting initial state after fetching data.

jsx
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,  // Initial state
    };
  }

  // Fetch data after the component mounts
  componentDidMount() {
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data });  // Update the state with fetched data
      });
  }

  render() {
    return (
      <div>
        {this.state.data ? (
          <div>Data: {this.state.data}</div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}
```
When to Use: componentDidMount() is ideal for performing actions that require the component to be fully rendered (like fetching data from APIs, adding event listeners, or initializing timers).
2. Updating: Managing State When the Component Updates
When the state or props of a component change, React triggers an update, leading to a re-render of the component. Here are the key methods involved in managing state during updates:

a) setState():
setState() is the primary way to update the state in a class component. Whenever you call setState(), React re-renders the component and updates the UI to reflect the new state.

Example: Incrementing a counter on button click.

jsx
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,  // Initial state
    };
  }

  // Method to update the state
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}
```
When to Use: Use setState() whenever you need to change the component's state. This method is asynchronous and triggers a re-render.
b) shouldComponentUpdate(nextProps, nextState):
This method allows you to control whether a component should re-render or not when the state or props change. It returns true or false depending on whether you want the re-render to occur. By default, this method returns true, meaning the component will always re-render.

Example: Prevent unnecessary re-renders.

jsx
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Only re-render if the count is even
    return nextState.count % 2 === 0;
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log('Rendered');
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}
```
When to Use: Use this method to optimize performance by preventing unnecessary renders based on changes in state or props.
c) componentDidUpdate(prevProps, prevState):
This method is invoked immediately after the component re-renders. It’s useful when you want to perform some action after the update, such as logging changes, making network requests based on updated props, or updating the DOM.

Example: Trigger an action when state changes.

jsx
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`Count has been updated to: ${this.state.count}`);
    }
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}
```
When to Use: Use componentDidUpdate() for actions like interacting with the DOM or performing side effects after the state or props change.
3. Unmounting: Managing State When the Component is Removed
When a component is removed from the DOM, React calls the componentWillUnmount() lifecycle method. This is the right place to clean up anything that could lead to memory leaks, such as timers, subscriptions, or event listeners.

a) componentWillUnmount():
This method is invoked immediately before a component is destroyed and unmounted. It’s used for cleanup tasks, such as canceling network requests, clearing timers, or removing event listeners.

Example: Cleaning up an interval timer.

jsx
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);  // Clean up the interval on unmount
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
      </div>
    );
  }
}
```
When to Use: Use componentWillUnmount() to clean up side effects (e.g., removing event listeners, stopping timers, or canceling API requests) when the component is removed from the DOM.
Example: Full Workflow of State Management in Class Components
Here’s a more comprehensive example that demonstrates the full lifecycle of state management, from mounting to updating and unmounting:

jsx
```js
import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
    };
  }

  // Start the timer when the component mounts
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }

  // Clean up the timer when the component unmounts
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // Trigger a message when the timer updates
  componentDidUpdate(prevProps, prevState) {
    if (prevState.seconds !== this.state.seconds) {
      console.log(`Timer updated: ${this.state.seconds} seconds`);
    }
  }

  render() {
    return (
      <div>
        <h1>Time: {this.state.seconds} seconds</h1>
      </div>
    );
  }
}

export default Timer;
```
Explanation:
Mounting (componentDidMount): When the Timer component mounts, a timer is started, and the seconds state is updated every second.
Updating (componentDidUpdate): After every update (every second), the componentDidUpdate method logs the updated timer value.
Unmounting (componentWillUnmount): When the component is unmounted, the componentWillUnmount method clears the timer to prevent memory leaks.
Summary:
Mounting: constructor and componentDidMount() are used to initialize and set up the component’s state.
Updating: setState(), shouldComponentUpdate(), and componentDidUpdate() are used to handle state updates and control re-rendering.
Unmounting: componentWillUnmount() is used for cleaning up any side effects (like event listeners or timers) when the component is removed from the DOM.
By understanding and using these lifecycle methods, you can effectively manage state and side effects in class-based React components. Let me know if you need more details! 😊







 Generating Random Data (generateRandomData) in Class Components
The generateRandomData function is responsible for generating a random item from the array of objects using Math.random() and Math.floor().

Here’s the full code for the random data generation:

jsx
Copy code
generateRandomData = () => {
  const { data } = this.state;  // Destructure the data array from the state
  const randomIndex = Math.floor(Math.random() * data.length);  // Generate a random index
  const randomItem = data[randomIndex];  // Use the random index to select a random object from the array
  this.setState({ selectedItem: randomItem });  // Update the state with the randomly selected object
};
Explanation of Each Line:
generateRandomData = () => { ... }:

This is an arrow function that is assigned to the generateRandomData property of the class. It allows us to access this inside the function without needing to bind it manually in the constructor.
This function is triggered when the user clicks the "Generate Random Data" button.
const { data } = this.state;:

Here, destructuring is used to extract the data array from the component's state.
this.state refers to the component’s state, which holds all the data for the component. By doing const { data } = this.state;, we are accessing the data array directly.
Why: This allows us to work with the data array directly without repeatedly writing this.state.data.
const randomIndex = Math.floor(Math.random() * data.length);:

Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
Math.random() * data.length multiplies this random decimal by the length of the data array. This gives us a random number between 0 and data.length (the total number of objects in the array).
If data.length is 4, this will generate a number between 0 and 3.9999....
Math.floor() rounds this decimal number down to the nearest integer, which ensures that the index is a valid integer within the bounds of the array.
For example, if Math.random() generates 0.67, and data.length is 4, then 0.67 * 4 = 2.68. Math.floor(2.68) will give 2, which is a valid index for an array with 4 items (indexes 0 to 3).
const randomItem = data[randomIndex];:

This line uses the randomly generated index (randomIndex) to access an object from the data array.
data[randomIndex] refers to the object at that random index in the data array.
For example, if randomIndex = 2, then randomItem will refer to the object at index 2 in the data array.
this.setState({ selectedItem: randomItem });:

this.setState() is used to update the component's state in class-based components.
We are updating the selectedItem property in the state with the randomItem object that was just randomly selected.
What happens:
When setState is called, React triggers a re-render of the component. The new state (with the updated selectedItem) is passed to the render() method, allowing the newly selected item to be displayed on the screen.
2. Rendering the Selected Object (render() in Class Components)
In class components, the render() method is responsible for returning the JSX (HTML-like syntax) that React renders to the DOM. The component is re-rendered whenever the state changes (such as when we update the selectedItem in generateRandomData).

Here’s the full code for rendering the selected object:

jsx
Copy code
render() {
  const { selectedItem } = this.state;  // Destructure selectedItem from state

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Random Data Generator</h1>
      <button onClick={this.generateRandomData} style={buttonStyles}>
        Generate Random Data
      </button>

      {selectedItem && (  // Conditionally render if selectedItem is not null
        <div style={{ marginTop: '20px' }}>
          <h2>Selected Person:</h2>
          <p>ID: {selectedItem.id}</p>
          <p>Name: {selectedItem.name}</p>
          <p>Age: {selectedItem.age}</p>
          <img
            src={selectedItem.image}
            alt={selectedItem.name}
            style={imageStyle}
          />
        </div>
      )}
    </div>
  );
}
Explanation of Each Line:
render() { ... }:

The render() method is a required method in all class-based components. It is responsible for returning JSX, which defines what the component should display in the UI.
It is called automatically whenever the state or props change.
const { selectedItem } = this.state;:

This line destructures the selectedItem from the state.
this.state contains the component’s current state, and selectedItem holds the randomly selected object (or null initially).
By doing const { selectedItem } = this.state;, we can reference selectedItem directly without writing this.state.selectedItem every time.
return ( ... ):

This is where the JSX is returned. React will render whatever is returned by render() to the DOM.
The JSX is written inside the parentheses.
<div style={{ textAlign: 'center', padding: '20px' }}>:

This is the outer container for the content in the component. The style attribute applies inline CSS to this <div>, centering the content (textAlign: 'center') and adding padding (padding: '20px').
<h1>Random Data Generator</h1>:

A simple <h1> tag that displays the heading "Random Data Generator" at the top of the page.
<button onClick={this.generateRandomData} style={buttonStyles}>Generate Random Data</button>:

This is the button that, when clicked, calls the generateRandomData function.
onClick={this.generateRandomData}:
This attaches an event listener to the button. When the button is clicked, this.generateRandomData is called, which generates a random item and updates the state.
style={buttonStyles}:
This applies some basic inline styles to the button, such as padding, font size, and margin.
Button Text: The text "Generate Random Data" is displayed inside the button.
{selectedItem && ( ... )}:

This is conditional rendering. It ensures that the block of code inside the parentheses is only rendered if selectedItem is not null (i.e., after a random item has been selected).
Why: Initially, selectedItem is null, so we don’t want to display the person’s details until an item is selected. Once selectedItem is set (after clicking the button), this block will render.
<div style={{ marginTop: '20px' }}>:

This <div> is the container for the selected person’s details (ID, name, age, and image). It has some inline styling to add some space between the button and the displayed content (marginTop: '20px').
<h2>Selected Person:</h2>:

This is a heading that displays "Selected Person:" above the selected person’s details.
<p>ID: {selectedItem.id}</p>:

This <p> element displays the ID of the selected person. selectedItem.id accesses the id property of the selected object.
<p>Name: {selectedItem.name}</p>:

This <p> element displays the name of the selected person. selectedItem.name accesses the name property of the selected object.
<p>Age: {selectedItem.age}</p>:

This <p> element displays the age of the selected person. selectedItem.age accesses the age property of the selected object.
<img src={selectedItem.image} alt={selectedItem.name} style={imageStyle} />:

This <img> element displays the image of the selected person.
src={selectedItem.image}: The src attribute points to the image URL stored in the image property of the selected object.
alt={selectedItem.name}: The alt attribute provides alternative text that is displayed if the image cannot be loaded. In this case, the person’s name is used as the alt text.
style={imageStyle}: This applies inline CSS to the image, such as size and border radius.
Recap of How It All Works:
State Management: The component manages an array of objects (data) and a selectedItem to store the currently selected person.
Generating Random Data: When the button is clicked, generateRandomData selects a random object from the array and updates the state.
Rendering: The render() method re-renders the component every time the state changes. If a person is selected, their details (ID, name, age, image) are displayed using conditional rendering.
UI Updates: When a random item is selected, the component re-renders, showing the selected person’s details below the button.