export const ADD_CARD = 'ADD_CARD';
export const UPDATE_STATUS = 'UPDATE_STATUS';

export function addCard(title, priority, status, createdBy, assignedTo, id){
  console.log('id', id);
  return{
    type: ADD_CARD,
    title, 
    priority,
    status, 
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
       