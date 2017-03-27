import React, { Component } from 'react';
import Card from './Card.js';

class CompletedCards extends Component{
  constructor(props){
    super(props);
    console.log('props', props);
  }
   render(){
    return(
      <div className="M">
      {this.props.cards.filter((card) => card.status === "completed").map((card) =>{
        return (<Card
          title={card.title}
          priority={card.priority}
          status={card.status}
          createdAt={card.createdAt}
          AssignedTo={card.AssignedTo}
          />)
        })}
      </div>
      )
    }
  } 

  export default CompletedCards;