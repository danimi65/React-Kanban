import React, { Component } from 'react';
import Card from './Card.js';

class ToDoCards extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="Q">
      {this.props.cards.filter((card) => card.status === "to do").map((card) =>{
        return (<Card
          title={card.title}
          priority={card.priority}
          status={card.status}
          createdby={card.createdBy}
          assignedTo={card.assignedTo}
          />)
        })}  
      </div>
     
    )
  }
} 

export default ToDoCards;     