
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [text, settext] = useState("Enable dark mode");
  const [alert, setAlert] = useState(null);
  
  const [mystyle, setmystyle] = useState({
    color:'black'
  })
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    }
    )
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode=()=>{
    if(mode==='dark'){
      setmode('light');
      settext("Enable dark mode");
      setmystyle({color:'black'});
      document.body.style.backgroundColor='white';
      showAlert("Light mode is Enabled","Success");
      document.title="TextCat-Light mode";
    }
    else{
      setmode('dark');
      settext("Enable light mode");
      setmystyle({color:'white'});
      document.body.style.backgroundColor='black';
      showAlert("Dark mode is Enabled","Success");
      document.title="TextCat-Dark mode";
    }
  }
  return (
    <>
  <Router>    
    <Navbar title="TextCat" mode={mode} toggleMode={toggleMode} text={text} mystyle={mystyle}/>
    <Alert alert={alert}/>
  <div className="container">
      <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text to analyze below" mode={mode}/>}/>
        <Route exact path="/about" element={<About mode={mode}/>}/>
      </Routes>
  </div>
  </Router>
    
    
   
   </>
   
  );
}

export default App;
