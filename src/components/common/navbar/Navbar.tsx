import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeLink = ({
    isActive,
    isPending,
  }: {
    isActive: boolean;
    isPending: boolean;
  }) => {
    return isPending ? 'pending' : isActive ? 'text-white' : '';
  };

  return (
    <nav className='bg-gray-800 p-4 h-[60px]'>
      <div className='mx-auto flex justify-between items-center'>
        <div className='text-white font-bold text-xl'>
          <Link to='/'>My Site</Link>
        </div>
        <ul className='flex space-x-4'>
          <li>
            <NavLink to='home' className={activeLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='about' className={activeLink}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='contact' className={activeLink}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
