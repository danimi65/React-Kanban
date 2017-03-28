export const ADD_CARD = 'ADD_CARD';

export function addCard(title, status, priority, createdBy, assignedTo){
  return{
    type: ADD_CARD,
    title, 
    status, 
    priority,
    createdBy,
    assignedTo
  };
}
       