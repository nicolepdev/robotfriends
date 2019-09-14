import React from 'react';

const Card = props => {
  const { name, email, id } = props;
  return (
    <div className="bg-light-green dib br3 pa2 ma3 dim bw2 shadow-5">
      <img
        className="br-100"
        src={`https://robohash.org/${props.id}?200x200"`}
        alt="robot profile"
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
