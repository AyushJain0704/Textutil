import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textform from './components/Textform';
import About from './components/About';
import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
      
    }, 1500);

  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert(' Dark Mode has been enabled', 'success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white' 
      showAlert(' Light Mode has been enabled', 'success')
     }
  }

  return (
    <Router>
      <>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Textform showAlert={showAlert} heading="Enter Your Text Here" mode={mode}/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
