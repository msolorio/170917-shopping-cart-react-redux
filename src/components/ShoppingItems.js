import React from 'react';
import { connect } from 'react-redux';
import SingleShoppingItem from './SingleShoppingItem';
import itemInventory from '../itemInventory';
import { addItem } from '../actions';

export function ShoppingItems(props) {

  function handleItemAdd(itemId) {
    props.dispatch(addItem(itemId));
  }

  function getItems() {
    return itemInventory.map((item, index) => {
      return <SingleShoppingItem {...item}
        handleItemAdd={() => handleItemAdd(item.itemId)}
        key={index} />;
    });
  };

  return (
    <div>
      {getItems()}
    </div>
  );
};

export default connect()(ShoppingItems);
