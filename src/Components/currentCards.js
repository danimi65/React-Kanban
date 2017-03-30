import React, { Component } from 'react';
import Card from './Card.js';

class CurrentCards extends Component{
  constructor(props){
    super(props);
    console.log('props', props);
  }
  render(){
    return(
      <div>
      {this.props.cards.filter((card) => card.status === "current").map((card) =>{
        return (
          <div className="currentsingle"><Card
          editStatus={this.props.editStatus}
          title={card.title}
          priority={card.priority}
          status={card.status}
          createdBy={card.createdBy}
          assignedTo={card.assignedTo}
          /></div>)
        })}
      </div>
      )
    }
  } 
 
  export default CurrentCards;    