import './Header.scss';
// import logo from '../../assets/images/avatar_result.webp';
import { Link } from 'react-router-dom';

import Nav from '../Nav/Nav';

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <Link className="nav__link" to="/">
            <img
              alt="logo"
              className="header__image"
              src={`${process.env.PUBLIC_URL}/android-chrome-512x512.png`}
            />
          </Link>
          {/* <img alt="logo" className="header__image" src={logo} /> */}
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
