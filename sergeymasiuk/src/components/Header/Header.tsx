import Nav from '../Nav/Nav';
import './Header.scss';
import logo from '../../assets/images/avatar.jpg';

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <p className="header__logo">
          <img alt="logo" className="header__image" src={logo} />
        </p>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
