export const ADD_CARD = 'ADD_CARD';
export const UPDATE_STATUS = 'UPDATE_STATUS';

export function addCard(title, status, priority, createdBy, assignedTo, id){
  return{
    type: ADD_CARD,
    title, 
    status, 
    priority,
    createdBy,
    assignedTo,
    id
  };
}

export function updateStatus(id, status){
  return{
    type: UPDATE_STATUS,
    id,
    status
  };
}
       