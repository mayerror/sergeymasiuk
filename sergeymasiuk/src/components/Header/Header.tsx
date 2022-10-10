import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <p className="header__copyright">&copy; 2022, Sergey Masiuk</p>
        <div className="header__social-list" />
      </div>
    </header>
  );
}

export default Header;
