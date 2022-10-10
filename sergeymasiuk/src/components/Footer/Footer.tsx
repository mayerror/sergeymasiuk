import './Footer.scss';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <p className="footer__copyright">&copy; 2022, Sergey Masiuk</p>
        <div className="footer__social-list">
          <a className="link footer__link" href="https://www.linkedin.com/in/sergey-masiuk/">
            <BsLinkedin className="social-icon" size={28} />
          </a>
          <a className="link footer__link" href="https://github.com/mayerror">
            <BsGithub className="social-icon" size={28} />
          </a>
          <a className="link footer__link" href="mailto:mayerror@gmail.com">
            <SiGmail className="social-icon" size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
