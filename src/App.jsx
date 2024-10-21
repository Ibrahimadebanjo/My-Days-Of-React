import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
//import FunctionalComponent from './Day-01-Components/component'
import Exercise1 from './Day-01-Components/Exercise-01';
import HexGenerator from './Day-01-Components/Exercise-02';
import Numbers  from './Day-03-Mapping/Mapping';
import Class from './Day-04-Class-Components/Class';
import Class2 from './Day-04-Class-Components/Class2';
import TodoList from './Day-04-Class-Components/Simple-to-do';
import Counter from './Day-05-State/State-class-count';
import FunctionalCounter from './Day-05-State/State-functional-counter';
import BackgroundChange from './Day-05-State/Exercise-state-2';
import RandomDataGenerator from './Day-05-State/Exercise-state-1';
import RandomDataGenerator2 from './Day-05-State/Functional';

const data = {
  name : "Ibrahim Adebanjo",
  age : 23
}
function App() {

  return ( 
      <div>
        {/* <FunctionalComponent/> */}
{/* <Exercise1 />
<HexGenerator /> */} 
{/* <Numbers numbers = {numbers}/> 
<Skills skills={skills} />
<Countries countries={countries}/> */}
<Class />
<Class2 data={data}/>
<TodoList/>
<Counter/>
<FunctionalCounter/>
<BackgroundChange/>
<RandomDataGenerator2/>
    </div>
  )
}
export default App
