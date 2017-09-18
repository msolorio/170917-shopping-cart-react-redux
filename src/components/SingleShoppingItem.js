import React from 'react';

export default function SingleShoppingItem(props) {
  return (
    <div>
      <h3>{props.itemName}</h3>
      <p>$ {props.price}</p>
      <div>{props.ratingStars} / 5 stars</div>
      <button onClick={props.handleItemAdd}>
        Add to Cart
      </button>
    </div>
  );
};
