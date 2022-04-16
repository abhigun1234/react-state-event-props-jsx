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
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import Demojsx from './components/Demojsx';
import MyAddress from './components/MyAddress';
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
   {/* <ParentDemoSunday></ParentDemoSunday> */}
   {/* <FunctionalComponent></FunctionalComponent>
   <ClassComponent></ClassComponent> */}
    <MyAddress name="ravi" email="abc@gmail.com" ></MyAddress>
    <MyAddress name="ram" email="abc@gmail.com"></MyAddress>
    <MyAddress  name="nikita" email="abc@gmail.com"></MyAddress>
    </div>
  );
  // return  React.createElement('div',{id:'1',className:'myclass'},React.createElement('h1','null','hello abhishek'))
}

export default App;
