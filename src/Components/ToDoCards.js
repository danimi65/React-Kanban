import React, { Component } from 'react';
import Card from './Card.js';

class ToDoCards extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
      {this.props.cards.filter((card) => card.status === "to do").map((card) =>{
        return (<div className="todosingle"><Card
          editStatus={this.props.editStatus}
          title={card.title}
          priority={card.priority}
          status={card.status}
          createdby={card.createdBy}
          assignedTo={card.assignedTo}
          /></div>)
        })}  
      </div>
     
    )
  } 
} 

export default ToDoCards;     