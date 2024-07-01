
import "./App.css";
import Navbar from "./components/Navbar";
import TextForms from './components/TextForms'
import About from './components/About'
import Alert from "./components/Alert";
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');  // whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);

 const showAlert = (message, type)=>{
   setAlert({
    msg: message,
    type: type
   })
   setTimeout(() => {
    setAlert(null);
   }, 1500);
 }

//  const greenMode = () =>{
//   if(mode ==='light'){
//     setMode('green');
//     document.body.style.backgroundColor = 'green';
//     showAlert("green mode has been enabled","success");
//   }else{
//     setMode('light');
//     document.body.style.backgroundColor = 'white';
//     showAlert("Light mode has been enabled","success");

//   }
// }

  const toggleMode = () =>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      // document.title = 'TextStyler - Dark Mode';
      // setInterval(() => {
      // document.title = 'TextStyler - Dark Mode';  
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextStyler Now ..!';  
      //   }, 1200);
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
     
    }
  }
  return (
    <>
   <Router>
    <Navbar mode={mode} toggleMode={toggleMode} /> 
    <Alert alert={alert}/>
    {/* <TextForms showAlert={showAlert} heading = 'Enter the text to uppercase' mode={mode}/> */}
    <div className="container my-3"> 
    <Routes>
      {/*      / users --> components - 1
               /  users/home --> components -1 */}
       <Route path="/about" element={<About mode={mode}/>}>
       {/* <About/> */}
       </Route>
       <Route exact path='/' element={<TextForms showAlert={showAlert} heading = 'Try TextStyler - Word Counter, Character Counter, Remove extra spaces' mode={mode}/>}>
        </Route>
    </Routes>
    </div>
    </Router>    
    </>
  );
}

export default App;


