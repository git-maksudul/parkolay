import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Routes from './components/routes/Routes';
import App from './App';
import Page51 from './components/Page51/Page51';
import Page52 from './components/Page52/Page52';
import Page53 from './components/Page53/Page53';
import Page50 from './components/Page50/Page50';
import Page46 from './components/Page46/Page46';
import Page47 from './components/Page47/Page47';
import Page48 from './components/Page48/Page48';
import Page49 from './components/Page49/Page49';
import Page45 from './components/Page45/Page45';

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
        path: "/page51",
        element: <Page51></Page51>,
      },
      {
        path: "/page52",
        element: <Page52></Page52>,
      },
      {
        path: "/page53",
        element: <Page53></Page53>,
      },
      {
        path: "/page50",
        element: <Page50></Page50>,
      },
      {
        path: "/page46",
        element: <Page46></Page46>,
      },
      {
        path: "/page47",
        element: <Page47></Page47>,
      },
      {
        path: "/page48",
        element: <Page48></Page48>,
      },
      {
        path: "/page49",
        element: <Page49></Page49>,
      },
      {
        path: "/page45",
        element: <Page45></Page45>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
