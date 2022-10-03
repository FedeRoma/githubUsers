import { Route, Routes } from 'react-router-dom';
import { GithubUserRoutes } from '../githubUsers/routes/GithubUserRoutes';

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path='/*'
        element={<GithubUserRoutes />}
      />
    </Routes>
  );
};
