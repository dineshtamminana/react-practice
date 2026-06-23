
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SearchPage from "./pages/SearchPage";
import { useState } from 'react';
import Booking from './components/booking/Booking';



function App() {

  
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage/> }></Route>
        <Route path="/searchpage" element={<SearchPage/> }></Route>
      </Routes>
    </BrowserRouter>
    

  )


}

export default App


