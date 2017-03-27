import React, { Component } from 'react';
import Card from './Card.js';



class ToDoCards extends Component{
  constructor(props){
    super(props);
    console.log('props', props);
  }
  render(){
    return(
      // <div>
      <div className="Q">
      {this.props.cards.filter((card) => card.status === "to do").map((card) =>{
        return (<Card
          title={card.title}
          priority={card.priority}
          status={card.status}
          createdAt={card.createdAt}
          AssignedTo={card.AssignedTo}
          />)
        })} 
      </div>
      //  <div className="M">
      // {this.props.cards.filter((card) => card.status === "current").map((card) =>{
      //   return (<Card
      //     title={card.title}
      //     priority={card.priority}
      //     status={card.status}
      //     createdAt={card.createdAt}
      //     />)
      //   })}
      // </div>
      //  <div>
      // {this.props.cards.filter((card) => card.status === "completed").map((card) =>{
      //   return (<Card
      //     title={card.title}
      //     priority={card.priority}
      //     status={card.status}
      //     createdAt={card.createdAt}
      //     />)
      //   })}
      // </div>
      // </div>
    )
  }
} 

export default ToDoCards; 