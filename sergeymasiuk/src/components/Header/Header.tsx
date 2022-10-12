import './Header.scss';
import logo from '../../assets/images/avatar_result.webp';
import Nav from '../Nav/Nav';

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <img alt="logo" className="header__image" src={logo} />
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
