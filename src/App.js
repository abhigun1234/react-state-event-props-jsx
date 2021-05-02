import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Greet from './components/Props'
import State from './components/State'
import  HelloJsx  from './components/JSX'
import ManageState from './components/ManageState'
import StateDemo from './components/StateDemo';
import Parent from './components/Parent';
import List from './components/List';
import JsxDemoSunday from './components/JsxDemoSunday';
import Login from './components/Login';
import ParentDemoSunday from './components/ParentDemoSunday';
 function App() {
  return (
    <div className="App">
    
      {/* <Greet name="abhishek" address="pune"/>
      <Greet name="mukesh" address="delhi"/>
      <Greet name="rajesh" address="mumbai"/> */}
      {/* <State/> */}
      {/* <HelloJsx name="ravi" email="abc@gmail.com"/>
      <HelloJsx name="raj" email="abc@gmail.com"/>
      <HelloJsx name="ramesh" email="abc@gmail.com"/> */}
      {/* <ManageState/> */}
      {/* <HelloJsx></HelloJsx>
      <StateDemo></StateDemo> */}
      {/* <Parent></Parent> */}
      {/* <List></List> */}
      {/* <JsxDemoSunday></JsxDemoSunday> */}
   <ParentDemoSunday></ParentDemoSunday>
    </div>
  );
  // return  React.createElement('div',{id:'1',className:'myclass'},React.createElement('h1','null','hello abhishek'))
}

export default App;
