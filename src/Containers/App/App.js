import React, { Component } from 'react';
import '../App.css';
import FormArea from '../../Components/FormArea.js'; 
import ToDoCards from '../../Components/ToDoCards.js';
import CurrentCards from '../../Components/CurrentCards.js';
import CompletedCards from '../../Components/CompletedCards.js';
import { connect } from 'react-redux';
import { addCard, updateStatus} from '../../actions';





class App extends Component {
  constructor(){
    super();
    // this.state = {
    //   toDoCards: [],
    //   currentCards: [],
    //   completedCards: []
    // };

    this.editStatus = this.editStatus.bind(this);
  }

    // this.getToDoCards().then((data)=>{
    //   console.log('data',data)
    //   this.setState({toDoCards:JSON.parse(data) });
    // });
    // this.getCurrentCards().then((data)=>{
    //   this.setState({currentCards:JSON.parse(data)});
    // });
    // this.getCompletedCards().then((data) =>{
    //   this.setState({completedCards:JSON.parse(data)});
    // });
    

 addCardReq(card){
    return new Promise( (resolve, reject) =>{
    function reqListener () {
      let data = JSON.parse(this.responseText);
      resolve(data);
    console.log("add req", this.responseText);
    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("POST", "/api/card", true);
    oReq.send(JSON.stringify(card));
  });
  }

   editCardReq(card){
    console.log('before stfua=wegaeg',card);
    return new Promise( (resolve, reject) =>{
    function reqListener () {
      let data = JSON.parse(this.responseText);
      console.log("req data", data);
      resolve(data);
    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open('PUT', "/api/card/editstatus", true);
    oReq.setRequestHeader("Content-type", "application/json");
    console.log('oreq card', card);
    oReq.send(JSON.stringify(card));
  });
  }

  editStatus(data){
    // console.log('edit status data', data);
    // console.log('editStatus id', data.id);

    this.editCardReq(data)
    .then(data =>{
      console.log('edit card req data',data);
      this.props.onUpdateStatus(data.id, data.status);
    });
  }



  getToDoCards(){
    return new Promise( (resolve, reject) =>{
    function reqListener () {
      let data = JSON.parse(this.responseText);
    // console.log('get to do ', this.responseText);
      resolve(data);
    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "/api/card/todo");
    oReq.send();
  });
  }


   getCurrentCards(){
    return new Promise( (resolve, reject) =>{
    function reqListener () {
      let data = JSON.parse(this.responseText);
    // console.log(this.responseText);
      resolve(data);
    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "/api/card/current");
    oReq.send();
  });
  }
   getCompletedCards(){
    return new Promise( (resolve, reject) =>{
    function reqListener () {
      let data = JSON.parse(this.responseText);
      resolve(data);
    // console.log(this.responseText);
    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "/api/card/completed");
    oReq.send();
  });
  }

  componentWillMount() {
    this.getToDoCards()
    .then( data =>{
      console.log('data', data);
      data.forEach( card =>{
        console.log('this.props', card);
        this.props.onAddCard(card.title, card.priority, card.status, card.createdBy, card.assignedTo, card.id);
      });
    })
     this.getCurrentCards()
    .then( data =>{
      data.forEach( card =>{
        this.props.onAddCard(card.title, card.priority, card.status, card.createdBy, card.assignedTo, card.id);
      });
    })
     this.getCompletedCards()
    .then( data =>{
      data.forEach( card =>{ 
        this.props.onAddCard(card.title, card.priority, card.status, card.createdBy, card.assignedTo, card.id);
      });
    })

  }
  render() {
    // console.log('app this.props', this.props);
    return (
      <div className="body">

      <div className="inputForm">
        <FormArea onAddCard={this.props.onAddCard}/>
      </div>

        <div className="mainBoard">

        <div className="toDoCards">

        <div className="toDoHeader"> 
        <h2>To Do</h2>
        </div>
       
        <ToDoCards className="todo" cards={this.props.cards} editStatus={this.editStatus} />
    
        </div>

        <div className="currentCards">

         <div className="currentHeader">
        <h2>Current</h2>
        </div>
        <CurrentCards className="current" cards={this.props.cards} editStatus={this.editStatus} />
      
        </div>

        <div className="completedCards">
         <div className="completedHeader">
        <h2>Completed</h2>
        </div>
        
        <CompletedCards className="completed" cards={this.props.cards} editStatus={this.editStatus} /> 
        </div> 
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateStatus: (id, status) =>{
      dispatch(updateStatus(id, status));
    },
    onAddCard: (title, priority, status, createdBy, assignedTo, id) => {
      console.log('stuff', id);
      dispatch(addCard(title, priority, status, createdBy, assignedTo, id));
    }
  }
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);
 