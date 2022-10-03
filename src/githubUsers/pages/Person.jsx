import { useEffect, useState, useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import { getGithubUserById } from '../helpers/';

export const Person = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  const { users } = useContext(UserContext);

  const { url } = getGithubUserById(id, users);

  useEffect(() => {
    fetch(`${url}`)
      .then(response => response.json())
      .then(userData => setUser(userData));
  }, [url]);

  if (!user) {
    return <Navigate to='/home' />;
  }

  return (
    <div className='row mt-5'>
      <div className='col-2 d-flex justify-content-center'>
        <img
          src={user.avatar_url}
          className='userImage rounded-circle'
        />
      </div>

      <div className='col-10'>
        <p className='userName'>{user.name}</p>
        <p className='userLocation'>{user.location}</p>
      </div>
      <hr className='mt-2' />
    </div>
  );
};
