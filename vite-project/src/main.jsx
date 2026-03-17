import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './components/Error.jsx';
import Home from './components/Home.jsx';
// import About from './components/About.jsx';
import Bookdetails from './components/Bookdetails.jsx';
import { store } from './utils/store.js';
import { Provider } from 'react-redux';
const About = lazy(() => import('./components/About.jsx'));

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// let myAppRoute = createBrowserRouter([
//   {
//     path: "/", //home path
//     element: (
//       <Suspense fallback={<h1>Loading Layout...</h1>}>
//         <App />
//       </Suspense>
//     ),
//     errorElement: <Error/>,
//     children: [
//       {
//         path: "/",
//         element: (
//           <Suspense fallback={<h1>Loading Home...</h1>}>
//             <Home/>
//           </Suspense>
//         )
//       },
//       {
//         path: "/about", 
//         element: (
//           <Suspense fallback={<h1>Loading About...</h1>}>
//             <About/>
//           </Suspense>
//         )
//       },
//       {
//         path:"/bookdetail/:id",
//         element:(
//           <Suspense fallback={<h1>Loading BookDetails...</h1>}>
//             <Bookdetails/>
//           </Suspense>
//         )
//       }
//     ]
//   }
// ]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={myAppRoute}></RouterProvider>
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)