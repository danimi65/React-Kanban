import React, { Component } from 'react';
import Card from './Card.js';

class CurrentCards extends Component{
  constructor(props){
    super(props);
    console.log('props', props);
  }
  render(){
    return(
      <div className="Q">
      {this.props.cards.filter((card) => card.status === "current").map((card) =>{
        return (<Card
          title={card.title}
          priority={card.priority}
          status={card.status}
          createdAt={card.createdBy}
          AssignedTo={card.AssignedTo}
          />)
        })}
      </div>
      )
    }
  } 

  export default CurrentCards;    