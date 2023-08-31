import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './pages/Main';
import "./styles/components.css"
import NotFound from './pages/NotFound';
import FAQ from './pages/FAQ';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import {createBrowserRouter,RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <NotFound />
  },
  {
    path: "/sobre",
    element: <Sobre />,
    // errorElement: <NotFound />
  },
  {
    path: "/contato",
    element: <Contato />,
    // errorElement: <NotFound />
  },
  {
    path: "/faq",
    element: <FAQ />,
    // errorElement: <NotFound />
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
