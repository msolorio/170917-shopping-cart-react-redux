export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const INCREMENT_ITEM = 'INCREMENT_ITEM';
export const DECREMENT_ITEM = 'DECREMENT_ITEM';

export const addItem = (itemId) => ({
  type: ADD_ITEM,
  itemId
});

export const removeItem = (itemId) => ({
  type: REMOVE_ITEM,
  itemId
});

export const incrementItem = (itemId) => ({
  type: INCREMENT_ITEM,
  itemId
});

export const decrementItem = (itemId) => ({
  type: DECREMENT_ITEM,
  itemId
});
