import React from 'react';

const Card = (props) => (
    <div>
      {props.title}
      {props.priority}
      {props.status}
  </div>
)

export default Card;