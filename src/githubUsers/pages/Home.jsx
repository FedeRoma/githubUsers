import { UserList } from '../components';

export const Home = () => {
  return (
    <div className='mt-4'>
      <h2>
        <b>Top 5 GitHub Users</b>
      </h2>
      <h6>Tap the username to see more information</h6>

      <UserList />
    </div>
  );
};
