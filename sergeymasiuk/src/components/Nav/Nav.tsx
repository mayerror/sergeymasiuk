import './Nav.scss';

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="sdf">
            about
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="sdf">
            portfolio
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="sdf">
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
