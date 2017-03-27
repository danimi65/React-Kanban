import React, { Component } from 'react';
import '../App.css';
import FormArea from '../../Components/FormArea.js'; 
import ToDoCards from '../../Components/ToDoCards.js';
import CurrentCards from '../../Components/CurrentCards.js';
import CompletedCards from '../../Components/CompletedCards.js';
import { connect } from 'react-redux';
import { addCard } from '../../actions';





class App extends Component {
  constructor(){
    super();
    // this.state = {
    //   toDoCards: [],
    //   currentCards: [],
    //   completedCards: []
    // };
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
    

 addCard(){
    return new Promise( (resolve, reject) =>{
    function reqListener () {
      let data = JSON.parse(this.responseText);
      resolve(data);
    console.log(this.responseText);
    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("POST", "/api/card");
    oReq.send();
  });
  }

  getToDoCards(){
    return new Promise( (resolve, reject) =>{
    function reqListener () {
      let data = JSON.parse(this.responseText);
    console.log('get to do ', this.responseText);
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
      resolve(data);
    console.log(this.responseText);
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
    console.log(this.responseText);
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
      data.forEach( card =>{
        console.log('card', card);
        this.props.onAddCard(card.title, card.status, card.priority, card.createdBy, card.AssignedTo);
      });
    })
     this.getCurrentCards()
    .then( data =>{
      data.forEach( card =>{
        console.log('card', card);
        this.props.onAddCard(card.title, card.status, card.priority, card.createdBy, card.AssignedTo);
      });
    })
     this.getCompletedCards()
    .then( data =>{
      data.forEach( card =>{
        console.log('card', card);
        this.props.onAddCard(card.title, card.status, card.priority, card.createdBy, card.AssignedTo);
      });
    })

  }
  render() {
    return (
      <div className="body">

      <div className="inputForm">
        <FormArea />
      </div>

        <div className="mainBoard">

        <div className="toDoCards">
        <h2>To Do</h2>
      
        <ToDoCards className="todo" cards={this.props.cards} />
        </div>

        <div className="currentCards">
        <h2> Current</h2>
        <CurrentCards className="current" cards={this.props.cards} />
        </div>

        <div className="completedCards">
        <h2>Completed</h2>
        <CompletedCards className="completed" cards={this.props.cards} /> 
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
    onAddCard: (title, status, priority, createdBy, AssignedTo) => {
      dispatch(addCard(title, status, priority, createdBy, AssignedTo));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
 