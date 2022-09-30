import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

import About from './components/About';
import React,
 { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter,
  Router,Route
  // Just Use Routes instead of "Switch"
  } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
    const showAlert = (message, type)=>{
       setAlert({
         msg: message,
         type: type
       })
       setTimeout(() =>{
         setAlert(null);
       }, 3000);


    }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode has bee enabled", "sucess");
      document.title = "MY-App - Dark Mode";
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "sucess");
      document.title = "MY-App - Light Mode";
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert  alert={alert} />
    <div className="container my-3">
    <BrowserRouter>
          <Route path="/about">
            <About />
          </Route>
       
          <Route path="/">
          <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          </Route>
          </BrowserRouter>
    </div>
    </Router> 
    </>
  );
}

export default App;