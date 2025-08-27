import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Page2 from './components/Page2/Page2';
import Routes from './components/routes/Routes';
import App from './App';
import Page3 from './components/Page3/Page3';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    children: [
      {
        path: "/page54",
        element: <App></App>,
      },
      {
        path: "/page2",
        element: <Page2></Page2>,
      },
      {
        path: "/page3",
        element: <Page3></Page3>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
