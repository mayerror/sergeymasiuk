import './Card.scss';
import { useLayoutEffect, useState } from 'react';

import { FastAverageColor } from 'fast-average-color';

type TypeCard = {
  picURL: string;
  order: number;
  // eslint-disable-next-line react/no-unused-prop-types
  link: string;
};

function Card(props: TypeCard) {
  const [color, setColor] = useState('rgba(200,200,200,1)');

  useLayoutEffect(() => {
    const fac = new FastAverageColor();

    fac
      .getColorAsync(props.picURL)
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
        background: `linear-gradient(to ${!props.order ? 'right' : 'left'}, ${color.replace(
          '1)',
          '0.8)'
        )}, #d0d7e2)`,
      }}
    >
      <div
        className="card__screen-wrapper"
        style={{
          order: `${props.order}`,
        }}
      >
        <a className="card__link" href={props.link} rel="noreferrer">
          <img alt="logo" className="card__screen" src={props.picURL} />
        </a>
      </div>
      <div className="card__descr-wrapper">
        <p>
          The project was developed as part of the React RS school course. Task: Make an interactive
          SPA application using the Flickr API or similar. Getting information, using sorting,
          navigation is done using the API.
        </p>
      </div>
    </div>
  );
}

export default Card;
