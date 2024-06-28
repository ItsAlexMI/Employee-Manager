import React,  { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<EmployeeForm />} />
            <Route path="/employee-list" element={<EmployeeList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
