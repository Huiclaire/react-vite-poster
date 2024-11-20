import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './routes/Posts'
import NewPost from './routes/NewPost';
import RootLayout from './routes/RootLayout';
import './index.css'
import Posts from './routes/Posts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        children: [{ path: '/create-post', element: <NewPost /> }],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Renter RouterProvider instead of App */}
    {/* <App /> */}
    <RouterProvider router={router}/>
    {/* It tells React Router to watch URL and start rendering
    different components for different paths */}
  </React.StrictMode>
)
