import './Header.scss';
// import logo from '../../assets/images/avatar_result.webp';
import Nav from '../Nav/Nav';

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <a href="./">
            <img
              alt="logo"
              className="header__image"
              src={`${process.env.PUBLIC_URL}/android-chrome-512x512.png`}
            />
          </a>
          {/* <img alt="logo" className="header__image" src={logo} /> */}
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
