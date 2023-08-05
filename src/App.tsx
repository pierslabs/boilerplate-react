/* eslint-disable no-console */
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { getUsers } from './services/fake-users';
import Layout from './components/common/Layout/Layout';

export const App = () => {
  useEffect(() => {
    getUsers().then((users) => console.log(users));
  }, []);
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default App;
