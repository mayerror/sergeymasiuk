import { NavLink } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            className={({ isActive }) => (isActive ? 'nav__link nav__link_active' : 'nav__link')}
            end
            to="/"
          >
            about
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            className={({ isActive }) => (isActive ? 'nav__link nav__link_active' : 'nav__link')}
            to="/portfolio"
          >
            portfolio
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            className={({ isActive }) => (isActive ? 'nav__link nav__link_active' : 'nav__link')}
            to="/contact"
          >
            contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
