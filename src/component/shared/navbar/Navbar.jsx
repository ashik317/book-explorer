import { NavLink } from 'react-router';

const Navbar = () => {
  const links = () => {
    return (
      <>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `font-semibold ${
                isActive
                  ? 'text-green-500 border border-green-500 bg-transparent'
                  : ''
              }`
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/booklist'
            className={({ isActive }) =>
              `font-semibold ${
                isActive
                  ? 'text-green-500 border border-green-500 bg-transparent'
                  : ''
              }`
            }
          >
            Listed Books
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/page-to-read'
            className={({ isActive }) =>
              `font-semibold ${
                isActive
                  ? 'text-green-500 border border-green-500 bg-transparent'
                  : ''
              }`
            }
          >
            Pages to Read
          </NavLink>
        </li>
      </>
    );
  };

  return (
    <nav className='bg-base-100 shadow-sm'>
      <div className='navbar container mx-auto'>
        {/* Navbar Start */}
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              ☰
            </div>

            <ul className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'>
              {links()}
            </ul>
          </div>

          <h2 className='text-[26px] font-black'>Book Vibe</h2>
        </div>

        {/* Navbar Center */}
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{links()}</ul>
        </div>

        {/* Navbar End */}
        <div className='navbar-end gap-2'>
          <button className='btn btn-info w-24'>SignUp</button>

          <button className='btn btn-success w-24'>SignIn</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
