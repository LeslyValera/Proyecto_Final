import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import Main from './main';
//import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Single from './single';
import Basic from './layout/basic';
import Catalogo from './pages/catalogo/catalogo';
import Carrito from './pages/carrito/carrito';

const feather = require("feather-icons");

setTimeout(() => {
    feather.replace();
  }, 1000);

  const router = createBrowserRouter([
    {
        path: "/",
        element: <Basic />,
        children: [
            {
                path:'/',
                element: <>
                
                    <div className="">
                        <Main></Main> {/*Asegurar que la ruta raíz apunte al componente Main*/}
                    </div>
                    {/*<div className="col-md-4">
                        <Aside></Aside>
                    </div>*/}
                </>
            },

            {
                path: "detalle/:slug",
                element: <Single/>,
            },

            /*creamos rutas para cada categoría*/
            {
                path: "catalogo",
                element: <Catalogo />,
            },

            {
                path: "/carrito",
                element: <Basic />,
                children: [
                    {
                        path: '',
                        element: <Carrito />
                    }
                ],
            },


            {
                path: "catalogo/:categoria",
                element: <Catalogo />,
            },
            
        ],
    },
    
]);

const root = createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);

