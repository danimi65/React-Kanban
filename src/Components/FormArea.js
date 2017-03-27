import React from 'react';


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
  }

  addCard(card){
    return new Promise( (resolve, reject) =>{
    function reqListener () {
      let data = JSON.parse(this.responseText);
      resolve(data);
    console.log(this.responseText);
    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("POST", "/api/card");
    oReq.send(card);
  });
  }

  handleSubmit(event){
    alert('submitted' + this.state.handleSubmit);
    event.preventDefault();
    console.log(this.state, 'state');
    this.addCard({
      title: this.state.title,
      priority: this.state.priority,
      status: this.state.status,
      createdBy: this.state.createdBy,
      assignedTo: this.state.assignedTo 
    });
    console.log('add card', this.addCard);


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
          <input type="text" name="title" placeholder="Title" onChange={this.titleValue}/> 
          <div>
           <input type="text" name="priority" placeholder="Priority" onChange={this.priorityValue}/> 
           </div>
           <div>
            <input type="text" name="Status" placeholder="Status" onChange={this.statusValue}/> 
            </div>
             <div>
            <input type="text" name="CreatedAt" placeholder="Created At" onChange={this.createdByValue}/> 
            </div>
             <div>
            <input type="text" name="AssignedTo" placeholder="Assigned To" onChange={this.assignedToValue}/> 
            </div>
           
            <div>
            <button type="submit">Submit</button>
            </div>
        </div>

      </form>

    )
  }
}

export default FormArea;