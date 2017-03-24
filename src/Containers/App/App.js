import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
import FormArea from '../../Components/FormArea.js';
// import Card from '../../Components/Card.js';
import CardList from '../../Components/CardList.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      toDoCards: [],
      currentCards: [],
      completedCards: []
    };
  }
  componentWillMount() {
    console.log(this.getToDoCards);

    this.getToDoCards().then((data)=>{
      console.log('data',data)
      this.setState({toDoCards:JSON.parse(data) });
    });
    this.getCurrentCards().then((data)=>{
      this.setState({currentCards:JSON.parse(data)});
    });
    this.getCompletedCards().then((data) =>{
      this.setState({completedCards:JSON.parse(data)});
    });
    
  }

  getToDoCards(){
    return new Promise( (resolve, reject) =>{
    function reqListener () {
      resolve(this.responseText);
    console.log(this.responseText);
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
      resolve(this.responseText);
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
      resolve(this.responseText);
    console.log(this.responseText);
    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "/api/card/completed");
    oReq.send();
  });
  }
  render() {
    return (
      <div>
        <FormArea />
        <CardList className="todo" cards={this.state.toDoCards} />
        <CardList className="current" cards={this.state.currentCards} />
        <CardList className="completed" cards={this.state.completedCards} />

      </div>
    );
  }
}

export default App;
 