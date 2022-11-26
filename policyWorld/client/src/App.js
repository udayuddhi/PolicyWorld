import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home'
import Policies from './pages/Policies/Policies';
import ContactUs from './pages/ContactUs/ContactUs';
import NavBar from './components/NavBar/NavBar.js';
import About from './pages/About/About';
import ShowPolicy from "./components/showPolicy/ShowPolicy"
import AdminDashboard from "./components/admin/AdminDashboard";

function App() {
  return (
    
    <div className="App ">
      <BrowserRouter>
         <NavBar/>
         <Routes>
          <Route exact path="/" element={<Home />} />        
          <Route exact path="/Policies/" element={<Policies/>} />
          <Route exact path="/Policies/:Policyname" element={<ShowPolicy/>}/>
          <Route exact path="/ContactUs" element={<ContactUs  />} />
          <Route exact path="/About" element={<About/>} />
          <Route exact path="/Admin" element={<AdminDashboard/>}/>
         </Routes>
      </BrowserRouter>
     
      
    </div>
    
  );
}

export default App;
