import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import { UserCard } from './';

export const UserList = () => {
  const { users } = useContext(UserContext);

  return (
    <div className='row mt-4'>
      {users &&
        users.map(user => (
          <div
            className='col-lg-2 col-md-2 col-sm-3 col-xs-3 m-1'
            key={user.id}>
            <UserCard
              key={user.id}
              {...user}
            />
          </div>
        ))}
    </div>
  );
};
