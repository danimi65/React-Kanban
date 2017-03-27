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

  handleSubmit(event){
    alert('submitted' + this.state.handleSubmit);
    event.preventDefault();
    this.props.addCard({
      title: this.state.title,
      priority: this.state.priority,
      status: this.state.status
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
          <input type="text" name="title" placeholder="Title"/> 
          <div>
           <input type="text" name="priority" placeholder="Priority"/> 
           </div>
           <div>
            <input type="text" name="Status" placeholder="Status"/> 
            </div>
             <div>
            <input type="text" name="CreatedAt" placeholder="Created At"/> 
            </div>
             <div>
            <input type="text" name="AssignedTo" placeholder="Assigned To"/> 
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