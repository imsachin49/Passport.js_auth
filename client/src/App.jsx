import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
          console.log(resObject);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);


  return (
    <Router>
    <div>
      <Navbar user={user}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={user ? <Navigate to='/' /> : <Login/> }/>
        </Routes>
    </div>
      </Router>
  )
}

export default App
