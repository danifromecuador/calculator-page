import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/calculator" className="nav-link">Calculator</NavLink>
        </li>
        <li>
          <NavLink to="/quote" className="nav-link">Quote</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
