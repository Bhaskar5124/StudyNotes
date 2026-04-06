import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './components/Error.jsx'
import Home from './components/Home.jsx'
import Dashboard from './components/Dashboard.jsx'
import Update from './components/Update.jsx'
import Home2 from './components/Home2.jsx'
import Profile from './components/Profile.jsx'
import Comments from './components/Comments.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

const myAppRoute = createBrowserRouter([{
  path: "/",
  element : <App/>,
  errorElement : <Error/>,
  children : [
    {
      path : "/",
      element : <Home/>
    },
    {
      path : "/login",
      element : <Home2/>
    },
    {
      path : "/dashboard",
      element : <Dashboard/>
    },
    {
      path : "/update",
      element : <Update/>
    },
    {
      path : "/mycomments",
      element : <Comments/>
    },
    {
      path : "/myprofile",
      element : <Profile/>
    },

  ]
}])

createRoot(document.getElementById('root')).render(
<RouterProvider router={myAppRoute}></RouterProvider>
)
