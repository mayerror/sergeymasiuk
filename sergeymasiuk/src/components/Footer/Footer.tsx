import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <a href="https://rs.school/">
          <img
            alt="logo"
            className="footer__logo"
            src="https://raw.githubusercontent.com/MaryAnzh/rslang-assets/61538a7429ec8a4b3eeab95ff3e595de36afad43/assets/svg/rs_school_white.svg"
          />
        </a>
        <a className="link footer__link" href="https://github.com/mayerror">
          Sergey Masiuk
        </a>
        <p className="footer__copyright">&copy; 2022, React</p>
      </div>
    </footer>
  );
}

export default Footer;
