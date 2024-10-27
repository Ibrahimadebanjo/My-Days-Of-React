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
import UseState01 from './Day-06-Hooks/Use-State01';
import UseState02 from './Day-06-Hooks/Use-State02';
import UseState03 from './Day-06-Hooks/Use-State03';
import UseEffect01 from './Day-06-Hooks/Use-Effect';
import UseEffect02 from './Day-06-Hooks/Use-Effect02';
import FocusInput from './Day-06-Hooks/UseRef';
import Timer from './Day-06-Hooks/UseRef02';
import InputRef from './Day-06-Hooks/UseRef03';
import UseMeme01 from './Day-06-Hooks/Use-Memo';
import ContextTesting from './Day-06-Hooks/Context-Testing';
import UseReducer01 from './Day-06-Hooks/Use-Reducer';


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
{/* <Class />
<Class2 data={data}/>
<TodoList/>
<Counter/>
<FunctionalCounter/>
<BackgroundChange/>
<RandomDataGenerator2/> */}
<UseState01/>
<UseState02/>
<UseState03/>
<UseEffect01/>
<UseEffect02/>
<FocusInput/>
<Timer/>
<InputRef/>
<UseMeme01/>
<ContextTesting/>
<UseReducer01/>
    </div>
  )
}
export default App
