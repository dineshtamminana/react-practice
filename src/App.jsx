
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SearchPage from "./pages/SearchPagx";
import { Notch } from './components/ui/notch';
import { useState } from 'react';






function App() {

  
 
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<HomePage />}></Route>
    //     <Route path="/home" element={<HomePage />}></Route>
    //     <Route path="/login" element={<LoginPage/> }></Route>
    //     <Route path="/searchpage" element={<SearchPage/> }></Route>
    //   </Routes>
    // </BrowserRouter>

  )


}

export default App


// ASSIGNMENT 1 — Beginner (30 min)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Task 1: npm install react-router-dom
// Task 2: Wrap App with BrowserRouter in main.jsx
// Task 3: Create 3 page components: HomePage, LoginPage, SearchPage
// (each just returns a simple <h1>Page Name</h1>)
// Task 4: Set up <Routes> with 3 <Route> for these pages
// Task 5: Create Navbar component with <Link> to each page
// Task 6: Test clicking links - confirm URL changes,
// NO full page reload happens
