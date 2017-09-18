import * as actions from '../actions';

const initialState = {
  // array of objects
  itemsInCart: [
    {
      itemId: 1,
      itemAmount: 2
    }
  ]
};

const itemsReducer = (state=initialState, action) => {

  if (action.type === actions.ADD_ITEM) {
    console.log('addItem action hit reducer');
    console.log('action:', action);

    const itemIdsInCart = state.itemsInCart.map(item => item.itemId);

    if (itemIdsInCart.indexOf(action.itemId) < 0) {
      return Object.assign({}, state, {
        itemsInCart: [
          ...state.itemsInCart,
          {itemId: action.itemId, itemAmount: 1}
        ]
      });
    } else {
      return Object.assign({}, state, {
        itemsInCart: state.itemsInCart.map((item) => {
          if (item.itemId === action.itemId) {
            return Object.assign({}, item, {
              itemAmount: item.itemAmount + 1
            });
          } else {
            return item;
          }
        })
      });
    }
  }

  return state;
};

export default itemsReducer;
