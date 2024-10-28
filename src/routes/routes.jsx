import {
  Home,
  About,
  Experience,
  Projects,
  Skills,
  Contacts,
} from '../pages/Pages';
import App from '../pages/App';
import AuthLayout from '../components/authLayout/AuthLayout';
import { createBrowserRouter } from 'react-router-dom';
import PageNotFound from '../components/pageNotFound/PageNotFound';

// create routes for components.
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/experience',
        element: <Experience />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/skills',
        element: <Skills />,
      },
      {
        path: '/contacts',
        element: <Contacts />,
      },
    ],
  },
]);

export default router;
