import { ADD_CARD } from '../actions';

const initialState = {
  cards: []
};

function cards(state = initialState, action) {
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
            assignedTo: action.assignedTo
          }
        ]
      })
    default:
      return state;
  } 
}

export default cards;   