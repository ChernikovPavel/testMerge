import React from "react";
import Layout from "./components/Layout";
import { useState } from "react";
import MainPage from "./components/pages/MainPage";
import RegPage from "./components/pages/RegPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LogPage from "./components/pages/LogPage";

function App() {  
  const [hookedUser, hookUser] = useState({id: 0, login: 'guest', password: null})


  const routes = [
    {
      path: '/',
      element: <Layout hookedUser={hookedUser}/>,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: '/reg',
          element: <RegPage />
        },
        {
          path: '/log',
          element: <LogPage />
        }
      ],
    },
  ];

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default App;
