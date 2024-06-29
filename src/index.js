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
                        <Main></Main>
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
        ],
    },
    
]);

const root = createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);
