import './Portfolio.scss';
import screen03 from '../../assets/images/jsFinalTaskScreen.png';
import screen04 from '../../assets/images/jsQuizTaskScreen.png';
import screen05 from '../../assets/images/jsTreeTaskScreen.png';
import screen02 from '../../assets/images/reactFinalTaskScreen.png';
import screen01 from '../../assets/images/reactTaskScreen.png';
import Card from '../../components/Card/Card';
import projects from '../../assets/portfolio.json';

function Portfolio() {
  return (
    <main className="portfolio">
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <Card
            description={projects.projects[0].description}
            link="https://rolling-scopes-school.github.io/mayerror-REACT2022Q1/react-redux/#/"
            order={0}
            picURL={screen01}
            stack={projects.projects[0].stack}
          />
        </li>
        <li className="portfolio__item">
          <Card
            description={projects.projects[0].description}
            link="https://rolling-scopes-school.github.io/mayerror-REACT2022Q1/react-redux/#/"
            order={1}
            picURL={screen02}
            stack={projects.projects[0].stack}
          />
        </li>
        <li className="portfolio__item">
          <Card
            description={projects.projects[0].description}
            link="https://rolling-scopes-school.github.io/mayerror-REACT2022Q1/react-redux/#/"
            order={0}
            picURL={screen03}
            stack={projects.projects[0].stack}
          />
        </li>
        <li className="portfolio__item">
          <Card
            description={projects.projects[0].description}
            link="https://rolling-scopes-school.github.io/mayerror-REACT2022Q1/react-redux/#/"
            order={1}
            picURL={screen04}
            stack={projects.projects[0].stack}
          />
        </li>
        <li className="portfolio__item">
          <Card
            description={projects.projects[0].description}
            link="https://rolling-scopes-school.github.io/mayerror-REACT2022Q1/react-redux/#/"
            order={0}
            picURL={screen05}
            stack={projects.projects[0].stack}
          />
        </li>
      </ul>
    </main>
  );
}

export default Portfolio;
