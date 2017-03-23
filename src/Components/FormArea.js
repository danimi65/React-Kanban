import React from 'react';

class FormArea extends React.Component {
  constructor(){
    super();
    
    this.state = {
    title: " ",
    priority: " ",
    status: "to do",
    createdBy: " ",
    assignedTo: " "
  }

  }

  render(){
    return(
      <form>

        <div>
          <input type="text" name="title" placeholder="title"/> 
          <div>
           <input type="text" name="priority" placeholder="priority"/> 
           </div>
           <div>
            <input type="text" name="Status" placeholder="status"/> 
            </div>
            <div>
             <input type="text" name="createdBy" placeholder="created by"/> 
             </div>
             <div>
              <input type="text" name="assignedTo" placeholder="assigned to"/> 
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