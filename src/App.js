/*import logo from './logo.svg';
import './App.css';
import Mainpage from './Component/Mainpage';
import { Route,Routes } from 'react-router-dom';
import Mealinfo from './Component/Mealinfo';
import Food from "./Components/Food"
import Recipe from './Components/Recipe';
 

function App() { 
  return (
     
    // <Mainpage/>
     
     <Routes>
      <Route path='/' element={<Food/>}/>
      <Route path='/:mealid' element={<Recipe/>}/>
     </Routes>
      
  );
}
 
export default App;*/
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Food from './Components/Food';
import Recipe from './Components/Recipe';
import Navbar from './Components/Navbar';
import Aboutus from './Components/Aboutus'; // Import the About Us component

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Food />} />
        <Route path="/about" element={<Aboutus />} /> {/* Route for About Us */}
        <Route path="/:mealid" element={<Recipe />} />
      </Routes>
    </>
  );
}

export default App;
