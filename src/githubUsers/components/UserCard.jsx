import { Link } from 'react-router-dom';

export const UserCard = ({ id }) => {
  return (
    <Link to={`/person/${id}`}>
      <button
        type='button'
        className='btn btn-primary btn-lg'>
        {`User #${id}`}
      </button>
    </Link>
  );
};
