import React from 'react';
import logo from './logo.svg';
import { Route, Router, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import AddNewCourses from './components/AddNewCourses/AddNewCourses';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AddNewCourses" element={<AddNewCourses />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
