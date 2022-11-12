import Card from '../../components/Card/Card';
import './Portfolio.scss';
import screen01 from '../../assets/images/reactTaskScreen.png';
import screen02 from '../../assets/images/reactFinalTaskScreen.png';
import screen03 from '../../assets/images/jsFinalTaskScreen.png';

function Portfolio() {
  return (
    <main className="portfolio">
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <Card order="0" picURL={screen01} />
        </li>
        <li className="portfolio__item">
          <Card order="1" picURL={screen02} />
        </li>
        <li className="portfolio__item">
          <Card order="0" picURL={screen03} />
        </li>
        <li className="portfolio__item">
          <Card order="1" picURL={screen02} />
        </li>
      </ul>
    </main>
  );
}

export default Portfolio;
