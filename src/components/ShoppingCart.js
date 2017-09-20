import React from 'react';
import { connect } from 'react-redux';
import ItemInCart from './ItemInCart';
import itemInventory from '../itemInventory';
import { incrementItem, decrementItem } from '../actions';

export function ShoppingCart(props) {

  function increment(itemId) {
    props.dispatch(incrementItem(itemId));
  };

  function decrement(itemId) {
    props.dispatch(decrementItem(itemId));
  }

  const items = props.itemsInCart.map((item, index) => {
    return (
      <ItemInCart {...item}
        increment={() => increment(item.itemId)}
        decrement={() => decrement(item.itemId)}
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
