import { Navigate, useRoutes } from 'react-router-dom';
import React, { Component } from 'react'
import DashboardLayout from './layouts';
import NewBook from './pages/new-book/NewBook';
import EditBook from './pages/edit-book/EditBook';
import ListBook from './pages/book-list/ListBook';
import Login from './pages/login/Login';



  function ERoutes() {
    const element = useRoutes([
      {
        path: "/dashboard",
        element: <DashboardLayout/>,
        children: [
          { path: 'books', element: <ListBook/>},
          { path: 'addbook', element: <NewBook/>},
          { path: 'editbook/:booId', element: <EditBook/>,},
        ],
      },
      {
        path: "/",
        element: <Login/>,
      },
    ]);
    
    return element;
  }
  
  export default ERoutes;
  
  