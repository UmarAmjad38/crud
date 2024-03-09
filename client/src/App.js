import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter, Route } from 'react-router-dom';
import User from './components/getuser/User';
import Add from './components/adduser/Add';
import Edit from './components/updateuser/Edit';
import { BrowserRouter as Routes } from "react-router-dom"; // Removed Link import
import Login from "./components/login_components.js";
import SignUp from "./components/signup_components.js";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");

  const route = createBrowserRouter([
    {
      path: '/sign-in',
      element: <Login />,
    },
    {
      path: '/sign-up',
      element: <SignUp />,
    },
    {
      path: '/',
      element: isLoggedIn === "true" ? <User /> : <SignUp />,
    },
    {
      path: '/add',
      element: <Add />,
    },
    {
      path: '/edit/:id',
      element: <Edit />,
    },
  ]);

  return (
    <RouterProvider router={route}>
      <div className="App">
        <Routes>
          <Route path="/" element={isLoggedIn === "true" ? <User /> : <SignUp />} />
        </Routes>
      </div>
    </RouterProvider>
  );
}

export default App;
