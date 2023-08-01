import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './index.css';
import App from './App';
import Brands from './components/Brands/Brands'

//different paths of website
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path:'CaseStudies',
    element: <Brands />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
