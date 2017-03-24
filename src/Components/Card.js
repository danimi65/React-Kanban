import React from 'react';

const Card = (props) => (
    <div>
    <p>{props.title}</p>
    <p>{props.priority}</p>
    <p>{props.status}</p>
  </div>
)

export default Card;