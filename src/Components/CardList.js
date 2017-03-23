import React, { Component } from 'react';
import Card from './Card.js';



class CardList extends Component{
  constructor(props){
    super(props);
    this.props = props
    console.log(props)
  }
  render(){
    return(
      <div>
      {this.props.cards.map((card) =>
        <Card
          title={card.title}
          priority={card.priority}
          status={card.status}
          />
        )}
      </div>
    )
  }
}

export default CardList;