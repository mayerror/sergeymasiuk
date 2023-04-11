import './Card.scss';
import { useLayoutEffect, useState } from 'react';

import { FastAverageColor } from 'fast-average-color';

type TypeCard = {
  picURL: string;
  order: number;
  // eslint-disable-next-line react/no-unused-prop-types
  link: string;
  description: string;
  stack: string;
};

function Card({ picURL, order, link, description, stack }: TypeCard) {
  const [color, setColor] = useState('rgba(200,200,200,1)');

  useLayoutEffect(() => {
    const fac = new FastAverageColor();

    fac
      .getColorAsync(picURL)
      .then((calcColor) => {
        setColor(calcColor.rgba);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div
      className="card"
      style={{
        background: `linear-gradient(to ${!order ? 'right' : 'left'}, ${color.replace(
          '1)',
          '0.8)'
        )}, #d0d7e2)`,
      }}
    >
      <div
        className="card__screen-wrapper"
        style={{
          order: `${order}`,
        }}
      >
        <a className="card__link" href={link} rel="noreferrer">
          <img alt="logo" className="card__screen" src={picURL} />
        </a>
      </div>
      <div className="card__descr-wrapper">
        <p className="card__description">
          <b>Description: </b>
          {description}
        </p>
        <p className="card__description">
          <b>Stack: </b>
          {stack}
        </p>
      </div>
    </div>
  );
}

export default Card;
