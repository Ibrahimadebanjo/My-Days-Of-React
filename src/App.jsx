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
    </div>
  )
}
export default App
