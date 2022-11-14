import './Card.scss';
import { useLayoutEffect, useState } from 'react';

import { FastAverageColor } from 'fast-average-color';

type TypeCard = {
  picURL: string;
  order: number;
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
          '0.7)'
        )}, #d0d7e2)`,
      }}
    >
      <a
        className="card__link"
        href={props.link}
        rel="noreferrer"
        style={{
          order: `${props.order}`,
        }}
        target="_blank"
      >
        <img alt="logo" className="card__screen" src={props.picURL} />
      </a>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate non ea, neque sunt
        eligendi qui asperiores voluptas tempora perspiciatis unde alias nihil fugiat necessitatibus
        quas, possimus facere delectus illum eius!
      </p>
    </div>
  );
}

export default Card;