export const ADD_CARD = 'ADD_CARD';

export function addCard(title, status, priority){
  return{
    type: ADD_CARD,
    title, 
    status, 
    priority
  };
}
  