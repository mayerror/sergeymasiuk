import './Portfolio.scss';
import screen03 from '../../assets/images/jsFinalTaskScreen.png';
import screen04 from '../../assets/images/jsQuizTaskScreen.png';
import screen05 from '../../assets/images/jsTreeTaskScreen.png';
import screen02 from '../../assets/images/reactFinalTaskScreen.png';
import screen01 from '../../assets/images/reactTaskScreen.png';
import Card from '../../components/Card/Card';

function Portfolio() {
  return (
    <main className="portfolio">
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <Card
            link="https://rolling-scopes-school.github.io/mayerror-REACT2022Q1/react-redux/#/"
            order={0}
            picURL={screen01}
          />
        </li>
        <li className="portfolio__item">
          <Card
            link="https://rolling-scopes-school.github.io/mayerror-REACT2022Q1/react-redux/#/"
            order={1}
            picURL={screen02}
          />
        </li>
        <li className="portfolio__item">
          <Card
            link="https://rolling-scopes-school.github.io/mayerror-REACT2022Q1/react-redux/#/"
            order={0}
            picURL={screen03}
          />
        </li>
        <li className="portfolio__item">
          <Card
            link="https://rolling-scopes-school.github.io/mayerror-REACT2022Q1/react-redux/#/"
            order={1}
            picURL={screen04}
          />
        </li>
        <li className="portfolio__item">
          <Card
            link="https://rolling-scopes-school.github.io/mayerror-REACT2022Q1/react-redux/#/"
            order={0}
            picURL={screen05}
          />
        </li>
      </ul>
      c
    </main>
  );
}

export default Portfolio;
