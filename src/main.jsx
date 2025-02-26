import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './routes/homePage/homePage.jsx'
import Dashboardpage from './routes/dashboardPage/dashboardPage.jsx'
import Chatpage from './routes/chatPage/chatPage.jsx'
import RootLayout from './Layouts/rootLayout/rootLayout.jsx'
import DashboardLayout from './Layouts/dashboardLayout/dashboardLayout.jsx'


const router = createBrowserRouter([
  {
    element: <RootLayout/>,
    children: [
      {
        path: "/",
        element: <Homepage/>,
      },
      {
        element: <DashboardLayout/>,
        children: [
          {
            path: "/dashboard",
            element: <Dashboardpage/>,
          },
          {
            path: "/dashboard/chats/:id",
            element: <Chatpage/>,
          },
        ],
      },
    ],

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
