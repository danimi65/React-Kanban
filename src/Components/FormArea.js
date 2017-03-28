import React from 'react';
// import addCardReq from '../Containers/App/App.js'
import { connect } from 'react-redux';
import { addCard } from '../actions';


class FormArea extends React.Component {
  constructor(){
    super();

    this.state = {
    title: ' ',
    priority: ' ',
    status: ' ',
    createdBy: ' ',
    assignedTo: ' '
  } 

  this.handleSubmit=this.handleSubmit.bind(this);
  this.titleValue=this.titleValue.bind(this);
  this.priorityValue= this.priorityValue.bind(this);
  this.statusValue= this.statusValue.bind(this);
  this.createdByValue= this.createdByValue.bind(this);
  this.assignedToValue= this.assignedToValue.bind(this);
  // this.addCardReq = this.addCardReq.bind(this);
  }

  addCardReq(card){
    return new Promise( (resolve, reject) =>{
    function reqListener () {
      let data = this.responseText;
      resolve(data);
    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("POST", "/api/card", true);
    oReq.setRequestHeader("Content-type", "application/json")
    oReq.send(JSON.stringify(card));
  });
  }

  addCard(data){
    console.log('assigned to', data.assignedTo);
    this.addCardReq(data)
    .then(data =>{
      this.props.onAddCard(data.title, data.status, data.priority, data.createdBy, data.assignedTo);
    });
  }

  handleSubmit(event){
    event.preventDefault();
      this.addCard({
        title: this.state.title,
        priority: this.state.priority,
        status: this.state.status,
        createdBy: this.state.createdBy,
        assignedTo: this.state.assignedTo 
      });
   


  }

  titleValue(event){
    this.setState({
      title: event.target.value
    });
  }

  priorityValue(event){
    this.setState({
      priority: event.target.value
    });
  }

  createdByValue(event){
    this.setState({
      createdBy: event.target.value
    });
  }

  statusValue(event){
    this.setState({
      status: event.target.value
    });
  }
  assignedToValue(event){
    this.setState({
      assignedTo: event.target.value
    });
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>

        <div>
          <input type="text" name="title" value={this.state.value} placeholder="Title" onChange={this.titleValue}/> 
           <input type="text" name="priority" value={this.state.value} placeholder="Priority" onChange={this.priorityValue}/> 
            <select onChange={this.statusValue} value={this.state.value}>
              <option disabled selected value>Status</option>
              <option value="to do">To Do</option>
              <option value="current">Current</option>
              <option value="completed">Completed</option>
            </select>
            <input type="text" name="createdBy" value={this.state.value} placeholder="Created By" onChange={this.createdByValue}/> 
            <input type="text" name="assignedTo" value={this.state.value} placeholder="Assigned To" onChange={this.assignedToValue}/>
           
        
            <button type="submit">Submit</button>
        </div>

      </form>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCard: (title, status, priority, createdBy, assignedTo) => {
      dispatch(addCard(title, status, priority, createdBy, assignedTo));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormArea);