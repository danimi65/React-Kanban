import React, { Component } from 'react';
import Card from './Card.js';

class CompletedCards extends Component{
  constructor(props){
    super(props);
    console.log('props', props);
  }
   
   render(){
    return(
      <div>
      {this.props.cards.filter((card) => card.status === "completed").map((card) =>{
        return (
          <div className="completedsingle"><Card
          editStatus={this.props.editStatus}
          title={card.title}
          status={card.status}
          priority={card.priority}
          createdBy={card.createdBy}
          assignedTo={card.assignedTo}
          /></div>)
        })}
      </div>
      )
    }
  } 

  export default CompletedCards;   