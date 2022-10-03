import { NavLink, useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onNavigateBack = () => {
    navigate(-1);
  };

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark p-2'>
      {pathname != '/home' && (
        <span
          className='aLink ms-3'
          onClick={onNavigateBack}>
          {`< Back`}
        </span>
      )}
      <div className='navbar-collapse d-flex justify-content-center'>
        <div className='navbar-nav home'>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link  ${isActive ? 'active' : ''}`
            }
            to='/home'>
            Home
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
