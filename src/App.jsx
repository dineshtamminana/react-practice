
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SearchPage from "./pages/SearchPage";
import { createContext, useContext, useState } from 'react';

// createContext returns the obj which contains the provider



const userData = createContext();

function App() {
  const [userDetails,setUserDetails] = useState({
    userName : "Please Login",
    passWord : ""
  });

  function handleLogin(){
    setUserDetails( (state) => ({
      ...state, userName : "Dinesh"
    }) )
  }

  

 
  return (
    <>
      <userData.Provider value={userDetails} />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/searchpage" element={<SearchPage />}></Route>
      </Routes>

      <userData.Provider />
    </>


  )


}

export default App

// Assignment 1 — Beginner (25 min)
// Recreate your One → Seven example properly:
// Task 1: Create UserContext using createContext()
// Task 2: Wrap One inside UserContext.Provider in App,
// with value="shiva"
// Task 3: Remove all userName props from One, Five, Six
// Task 4: In Seven, use useContext(UserContext) to read it
// Task 5: Verify Seven displays "shiva" without any prop passing

// Assignment 2 — Medium (35 min)
// Build a Context API for IRCTC user login:
// Task 1: Create UserContext
// Task 2: In App, store loggedInUser in state, wrap the
// whole app in UserContext.Provider
// Task 3: Create Navbar component that reads loggedInUser
// via useContext and shows "Welcome, {name}"
// Task 4: Create Footer component that also reads loggedInUser
// via useContext and shows "Logged in as {name}"
// Task 5: Confirm both components show correct data without
// receiving it as props


