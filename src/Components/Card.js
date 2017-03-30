import React, { Component } from 'react';
import {updateStatus} from '../actions';




class Card extends Component{
  constructor(props){
    super(props);

    this.statusUpdate=this.statusUpdate.bind(this);
  }

  statusUpdate(event){
    event.preventDefault();
    console.log('edit card', event.target.value)
      console.log(this.props.id)

    this.props.editStatus({
      id: this.props.id,
      status: event.target.value
    });
  }



  render(){
    return(
    <div className="oneCard">
    <p>Title: {this.props.title}</p>
    <p>Priority: {this.props.priority}</p>
    <p>Status:</p>  
    <select onChange={this.statusUpdate} value={this.props.status}>
              <option value="to do">To Do</option>
              <option value="current">Current</option>
              <option value="completed">Completed</option>
            </select>
    <p>Created by: {this.props.createdBy}</p>
    <p>Assigned To: {this.props.assignedTo}</p>
  </div>
    )
  }
}

export default Card;     