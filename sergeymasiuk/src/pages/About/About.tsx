import './About.scss';
import logo from '../../assets/images/avatar_result.webp';
import relogo from '../../assets/images/icons8-react-native-48.png';
import htmllogo from '../../assets/images/icons8-html-5-48.png';
import csslogo from '../../assets/images/icons8-css3-48.png';
import jslogo from '../../assets/images/icons8-javascript-48.png';
import redlogo from '../../assets/images/icons8-redux-48.png';
import sasslogo from '../../assets/images/icons8-sass-48.png';

function About() {
  return (
    <main className="main about">
      <div>
        <h1 className="about__title">Hello, my name is Sergey</h1>
        <p className="about__text about__text-about">
          I am a junior <b>front-end react developer</b>, I have successfully completed RS school
          courses.
        </p>
        <p className="about__text about__text-about">
          At the moment I work as an electrical engineer at an aircraft repair plant and develop
          automated process control systems. I want to change the scope of work to front-end
          development, the direction where complex projects go hand in hand with creativity.
        </p>
        <hr className="about__line" />
        <div className="about__stack-wrapper">
          <p className="about__text about__text-bold">Tech Stack &nbsp;&nbsp;|</p>
          <div className="tooltip">
            <img alt="html logo" className="about__brand-logo" src={htmllogo} />
            <span className="tooltiptext">HTML5</span>
          </div>
          <div className="tooltip">
            <img alt="css logo" className="about__brand-logo" src={csslogo} />
            <span className="tooltiptext">CSS3</span>
          </div>
          <div className="tooltip">
            <img alt="js logo" className="about__brand-logo" src={jslogo} />
            <span className="tooltiptext">Javascript</span>
          </div>
          <div className="tooltip">
            <img alt="react logo" className="about__brand-logo" src={relogo} />
            <span className="tooltiptext">React</span>
          </div>
          <div className="tooltip">
            <img alt="redux logo" className="about__brand-logo" src={redlogo} />
            <span className="tooltiptext">Redux</span>
          </div>
          <div className="tooltip">
            <img alt="sass logo" className="about__brand-logo" src={sasslogo} />
            <span className="tooltiptext">Sass</span>
          </div>
        </div>
        <p className="about__text about__text-bold">resume pdf</p>
      </div>
      <img alt="logo" className="about__image" src={logo} />
    </main>
  );
}

export default About;
