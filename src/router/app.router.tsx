import { createBrowserRouter } from 'react-router-dom';

import { PublicRoutes } from './public.routes';

// Replace this with your actual authentication check function
// const isAuthenticated = () => {
// Example: check if the user is logged in or has a valid token
// return true;
// };

export const router = createBrowserRouter(PublicRoutes);
