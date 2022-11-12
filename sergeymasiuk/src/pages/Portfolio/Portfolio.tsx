import Card from '../../components/Card/Card';
import './Portfolio.scss';
import screenshot from '../../assets/images/reactTaskScreen.png';

function Portfolio() {
  return (
    <main className="portfolio">
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <Card picURL={screenshot} />
        </li>
        <li className="portfolio__item">
          <Card picURL={screenshot} />
        </li>
        <li className="portfolio__item">
          <Card picURL={screenshot} />
        </li>
        <li className="portfolio__item">
          <Card picURL={screenshot} />
        </li>
      </ul>
    </main>
  );
}

export default Portfolio;
