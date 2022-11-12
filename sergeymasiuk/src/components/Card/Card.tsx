import './Card.scss';
import { useLayoutEffect, useState } from 'react';

import { FastAverageColor } from 'fast-average-color';

type TypeCard = {
  picURL: string;
  order: string;
};

function Card(props: TypeCard) {
  const [color, setColor] = useState('#fff');

  useLayoutEffect(() => {
    const fac = new FastAverageColor();

    fac
      .getColorAsync(props.picURL)
      .then((calcColor) => {
        setColor(calcColor.rgb);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div
      className="card"
      style={{
        background: `linear-gradient(${
          props.order === '0' ? 'to right' : 'to left'
        }, ${color}, #d0d7e2)`,
      }}
    >
      <img
        alt="logo"
        className="card__screen"
        src={props.picURL}
        style={{
          order: `${props.order}`,
        }}
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate non ea, neque sunt
        eligendi qui asperiores voluptas tempora perspiciatis unde alias nihil fugiat necessitatibus
        quas, possimus facere delectus illum eius!
      </p>
    </div>
  );
}

export default Card;
