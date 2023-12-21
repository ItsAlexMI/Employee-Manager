import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    
  return (
    <div className="h-screen border-r w-3/12 p-4 bg-gray-100 border-r-4 border-b border-gray-300 py-8 px-4">
      <h1 className="text-xl font-bold mb-4 text-slate-700">
        <i className="bx bx-book-open mr-2 text-xl "></i>
        Welcome to Employee Manager
        </h1>
    <hr className="mb-4 border-b border-gray-300"/>
      <div className="flex flex-col">
          <Link to="/" className="mb-5 bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded">
            <i className="bx bx-user-plus mr-2 text-xl "></i>
           Add Employee
          </Link>

          <hr className="mb-4 border-b border-gray-300"/>
     
          <Link to="/employee-list" className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded mb-2 mt-2">
            <i className="bx bx-list-ul mr-2 text-xl"></i>
            Employee List
          </Link>

        <hr className="mt-4 border-b border-gray-300"/>

      </div>
      
    </div>
  );
};

export default Sidebar;
