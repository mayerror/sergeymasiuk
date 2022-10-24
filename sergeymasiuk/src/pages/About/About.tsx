import './About.scss';
import logo from '../../assets/images/avatar_result.webp';

function About() {
  return (
    <main className="main about">
      <div>
        <h1 className="about__title">Hello, my name is Sergey</h1>
        <p className="about__text">
          I am a Software Designer / Engineer based in Tempe, AZ. Currently I am working at ui.dev
          helping folks level up with JavaScript. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Vero fugit et quaerat, commodi iure, eaque corrupti recusandae ut
          blanditiis voluptatem eum nulla sunt neque iusto ullam ratione laudantium quam nobis.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero fugit et quaerat, commodi
          iure, eaque corrupti recusandae ut blanditiis voluptatem eum nulla sunt neque iusto ullam
          ratione laudantium quam nobis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Vero fugit et quaerat, commodi iure
        </p>
      </div>
      <img alt="logo" className="about__image" src={logo} />
    </main>
  );
}

export default About;
