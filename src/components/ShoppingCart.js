import React from 'react';
import { connect } from 'react-redux';
import ItemInCart from './ItemInCart';
import itemInventory from '../itemInventory';
import { incrementItem, decrementItem, removeItem } from '../actions';

export function ShoppingCart(props) {
  const items = props.itemsInCart.map((item, index) => {

    function increment() {
      props.dispatch(incrementItem(item.itemId));
    };

    function decrement() {
      props.dispatch(decrementItem(item.itemId));
    }

    function remove() {
      console.log('in removeItem');

      props.dispatch(removeItem(item.itemId));
    }


    return (
      <ItemInCart {...item}
        remove={remove}
        increment={increment}
        decrement={decrement}
        key={index} />
    );
  });

  const grandTotal = props.itemsInCart.reduce((total, item) => {

    const itemData = itemInventory.find((inventoryItem) => {
      return inventoryItem.itemId === item.itemId;
    });

    return total + (itemData.price * item.itemAmount);
  }, 0);

  return (
    <div>
      <ul>
        {items}
      </ul>
      <div>Total: ${grandTotal}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  itemsInCart: state.itemsInCart
});

export default connect(mapStateToProps)(ShoppingCart);
