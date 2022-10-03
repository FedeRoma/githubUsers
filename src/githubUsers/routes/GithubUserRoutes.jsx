import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { UserProvider } from '../context/UserProvider';
import { Home, Person } from '../pages';

export const GithubUserRoutes = () => {
  return (
    <UserProvider>
      <Navbar />

      <div className='container'>
        <Routes>
          <Route
            path='home'
            element={<Home />}
          />

          <Route
            path='person/:id'
            element={<Person />}
          />

          <Route
            path='/'
            element={<Navigate to='/home' />}
          />
        </Routes>
      </div>
    </UserProvider>
  );
};
