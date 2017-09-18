import React from 'react';
import { connect } from 'react-redux';
import SingleShoppingItem from './SingleShoppingItem';
import itemInventory from '../itemInventory';

export function ShoppingItems() {

  function handleItemAdd() {
    console.log('in handleItemAdd');
  }

  function getItems() {
    return itemInventory.map((item, index) => {
      return <SingleShoppingItem {...item}
        handleItemAdd={handleItemAdd}
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
