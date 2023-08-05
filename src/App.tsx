/* eslint-disable no-console */
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { getUsers } from './services/fake-users';

export const App = () => {
  useEffect(() => {
    getUsers().then((users) => console.log(users));
  }, []);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default App;
