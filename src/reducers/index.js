import * as actions from '../actions';

const initialState = {
  itemsInCart: [
    {
      itemId: 1,
      itemAmount: 2
    }
  ]
};

const itemsReducer = (state=initialState, action) => {

  if (action.type === actions.ADD_ITEM) {
    const itemIdsInCart = state.itemsInCart.map(item => item.itemId);

    // if item doesn't exist, set amount to 1
    if (itemIdsInCart.indexOf(action.itemId) < 0) {
      return Object.assign({}, state, {
        itemsInCart: [
          ...state.itemsInCart,
          {itemId: action.itemId, itemAmount: 1}
        ]
      });

    // otherwise increment
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

  if (action.type === actions.REMOVE_ITEM) {
    console.log('REMOVE_ITEM hit reducer');
    return Object.assign({}, state, {
      itemsInCart: state.itemsInCart.filter(item => item.itemId !== action.itemId)
    });
  }

  if (action.type === actions.INCREMENT_ITEM) {
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

  if (action.type === actions.DECREMENT_ITEM) {
    const itemsClone = state.itemsInCart.map((item) => {
      if (item.itemId === action.itemId) {
        return Object.assign({}, item, {
          itemAmount: item.itemAmount - 1
        });
      } else {
        return item;
      }
    });

    // remove items with amounts of 0
    return Object.assign({}, state, {
      itemsInCart: itemsClone.filter(item => item.itemAmount !== 0)
    });
  }

  return state;
};

export default itemsReducer;
