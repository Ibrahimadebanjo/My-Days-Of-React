import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
//import FunctionalComponent from './Day-01-Components/component'
import Exercise1 from './Day-01-Components/Exercise-01';
import HexGenerator from './Day-01-Components/Exercise-02';
import Numbers  from './Day-03-Mapping/Mapping';
import Skills from './Day-03-Mapping/Arrayofarray';
import Countries from './Day-03-Mapping/Objectsofarray';

// variables 
const numbers = ['1', '2', '3', '4', '5'];
const skills = [
  ['HTML', 10],
  ['CSS', 7],
  ['JavaScript', 9],
  ['React', 8],
]
const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
]
function App() {

  return ( 
      <div>
        {/* <FunctionalComponent/> */}
{/* <Exercise1 />
<HexGenerator /> */} 
<h1>Numbers List</h1>
<Numbers numbers = {numbers}/> 
<Skills skills={skills} />
<Countries countries={countries}/>
    </div>
  )
}
export default App
