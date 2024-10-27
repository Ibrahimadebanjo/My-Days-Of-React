Goal
We'll create a context that provides:

A string for appTitle.
A number representing version.
An object for user information.
An array of items.
Then, we’ll consume these variables in a child component using useContext.

Step 1: Create and Set Up the Context
AppContext.js
jsx
Copy code
import React, { createContext, useState } from 'react';

// Create context
export const AppContext = createContext();

// Context provider component
export const AppProvider = ({ children }) => {
  // Define state variables with different data types
  const appTitle = 'My Simple App';      // String
  const version = 1.0;                   // Number
  const user = { name: 'Alice', age: 25 };  // Object
  const items = ['Item 1', 'Item 2', 'Item 3'];  // Array

  // Bundle all values into one object to pass to the provider
  const contextValue = {
    appTitle,
    version,
    user,
    items,
  };

  // Return the provider with the bundled context value
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
Explanation:
AppContext: Creates a new context for the app.
AppProvider: The provider component that bundles the variables (appTitle, version, user, and items) into one object (contextValue) and passes it to AppContext.Provider.
value={contextValue}: This makes appTitle, version, user, and items available to any child component that consumes AppContext.
Step 2: Wrap the Application in the Provider
To make AppContext available throughout the app, wrap the <App /> component with <AppProvider>.

App.js
jsx
Copy code
import React from 'react';
import { AppProvider } from './AppContext';
import DisplayComponent from './DisplayComponent';

const App = () => (
  <AppProvider>
    <div>
      <h1>Main Application</h1>
      <DisplayComponent />
    </div>
  </AppProvider>
);

export default App;
Explanation:
<AppProvider>: Wraps the app so that all components inside it, including DisplayComponent, have access to AppContext.
Step 3: Consume the Context in a Child Component
Now, let’s create DisplayComponent to consume and display each variable from the context.

DisplayComponent.js
jsx
Copy code
import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const DisplayComponent = () => {
  // Destructure variables from context using useContext
  const { appTitle, version, user, items } = useContext(AppContext);

  return (
    <div>
      <h2>{appTitle}</h2>       {/* Display appTitle (string) */}
      <p>Version: {version}</p> {/* Display version (number) */}
      <p>User: {user.name}, Age: {user.age}</p> {/* Display user (object) */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>    {/* Display items (array) */}
        ))}
      </ul>
    </div>
  );
};

export default DisplayComponent;
Explanation:
useContext(AppContext): Uses useContext to access AppContext, and we destructure the values (appTitle, version, user, and items) directly from the context.
Displaying the Context Variables:
appTitle (string): Displayed in an <h2> tag.
version (number): Displayed in a <p> tag.
user (object): Displays name and age properties from the user object.
items (array): Maps over the array to display each item in a list (<ul>).
Full Example
Here's what each file looks like in a simplified structure:

AppContext.js
jsx
Copy code
import React, { createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const appTitle = 'My Simple App';
  const version = 1.0;
  const user = { name: 'Alice', age: 25 };
  const items = ['Item 1', 'Item 2', 'Item 3'];

  const contextValue = { appTitle, version, user, items };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
App.js
jsx
Copy code
import React from 'react';
import { AppProvider } from './AppContext';
import DisplayComponent from './DisplayComponent';

const App = () => (
  <AppProvider>
    <div>
      <h1>Main Application</h1>
      <DisplayComponent />
    </div>
  </AppProvider>
);

export default App;
DisplayComponent.js
jsx
Copy code
import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const DisplayComponent = () => {
  const { appTitle, version, user, items } = useContext(AppContext);

  return (
    <div>
      <h2>{appTitle}</h2>
      <p>Version: {version}</p>
      <p>User: {user.name}, Age: {user.age}</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayComponent;
Explanation Recap
AppContext.js: Defines AppContext and AppProvider with multiple data types in contextValue (string, number, object, and array).
App.js: Wraps the application in AppProvider so that AppContext is available to all child components.
DisplayComponent.js: Uses useContext to consume the AppContext, allowing it to access and render appTitle, version, user, and items.
Key Takeaways
useContext with Multiple Variables: By bundling multiple values in an object, you can pass various data types through context, making it flexible for different kinds of data.
Destructuring: Destructure the values directly when consuming the context to access each variable conveniently.
Reusability: You can add additional data to AppProvider by simply adding more properties to contextValue.
This setup lets you easily share and access multiple variables of different data types throughout your app using the useContext hook. Let me know if you need further clarification! 😊