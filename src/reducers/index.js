import { ADD_CARD, UPDATE_STATUS } from '../actions';


const initialState = {
  cards: []
};

function cards(state = initialState, action) {
  console.log(action);
  switch(action.type) {
    case ADD_CARD:
      return Object.assign({}, state, {
        cards: [
        // ... is a spread operator, takes all key value pairs out from an object and puts them into a new object (like map or foreach)
          ...state.cards,
          {
            title: action.title,
            priority: action.priority,
            status: action.status,
            createdBy: action.createdBy,
            assignedTo: action.assignedTo,
            id: action.id
          }
        ]
      });
      case UPDATE_STATUS:
        let updateStatus = state.cards.map( card =>{
          if(card.id === action.id){
            card.status = action.status;
            return card;
          }else{
            
            return card;
          }
        });
        return Object.assign({}, state, {
          cards: [
          ...updateStatus
          ]
        }); 

    default:
      return state;
  } 
}

export default cards;   