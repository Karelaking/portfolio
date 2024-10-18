import {
  Home,
  About,
  Experience,
  Projects,
  Skills,
  Contacts,
  Login,
  SignIn,
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
      {
        path: '/login',
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: '/signin',
        element: (
          <AuthLayout authentication={false}>
            <SignIn />
          </AuthLayout>
        ),
      },
    ],
  },
]);

export default router;
