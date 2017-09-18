export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const addItem = (itemId) => ({
  type: ADD_ITEM,
  itemId
});

export const removeItem = (itemId, itemName) => ({
  type: REMOVE_ITEM,
  itemId
});
