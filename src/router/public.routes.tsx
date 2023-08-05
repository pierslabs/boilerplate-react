import { Navigate } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Home';

export const PublicRoutes = [
  {
    path: 'app',
    element: <App />,
    children: [
      { path: 'home', element: <Home /> },
      { path: '*', element: <Navigate to='home' /> },
    ],
  },
  {
    path: '/',
    element: <Navigate to='app/home' />,
  },
  {
    path: '*',
    element: <h1>Not found</h1>,
  },
];
