import React from 'react';

const Card=(props) => (
    <div className ="oneCard">
    <p>Title: {props.title}</p>
    <p>Priority: {props.priority}</p>
    <p>Status: {props.status}</p>
    <p>Created by: {props.createdBy}</p>
    <p>Assigned To: {props.assignedTo}</p>
  </div>
)

export default Card;       