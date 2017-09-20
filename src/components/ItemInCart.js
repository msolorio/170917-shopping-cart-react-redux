import React from 'react';
import itemInventory from '../itemInventory';

export default function ItemInCart(props) {
  const itemData = itemInventory.find(item => item.itemId === props.itemId);
  const total = props.itemAmount * itemData.price;

  return (
    <li>
      <span>{itemData.itemName}</span>&nbsp;
      <span>x</span>&nbsp;

      <span>
        <div onClick={props.increment}>&#9650;</div>
        {props.itemAmount}
        <div onClick={props.decrement}>&#9660;</div>
      </span>&nbsp;

      <span>${total}</span>
    </li>
  );
};
