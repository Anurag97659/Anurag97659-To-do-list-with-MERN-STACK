import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import REGISTRATION from './comp/registration';
import Login from './comp/login';
import Todolist from './comp/todolist';
import ChangeDetails from './comp/change-details';
import ChangePassword from './comp/change-password';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<REGISTRATION />} /> 
        <Route path="/registration" element={<REGISTRATION />} />
        <Route path="/login" element={<Login />} />
        <Route path='/todolist' element={<Todolist/>} />
        <Route path='/Change-details' element={<ChangeDetails/>} />
        <Route path='/Change-password' element={<ChangePassword/>} />
      </Routes>
    </Router>
  );
}

export default App;
