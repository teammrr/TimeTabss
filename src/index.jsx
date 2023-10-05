import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from './components/Home.jsx';
// import Years from './components/years/Years';


// const router = createBrowserRouter([
//   {
//       path: "/",
//       element: <Home />,
//   },
//   {
//       path: "years",
//       element: <Years />,
//   }
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);


