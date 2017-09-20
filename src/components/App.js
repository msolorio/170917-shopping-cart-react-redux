import React from 'react';
import ShoppingItems from './ShoppingItems';
import ShoppingCart from './ShoppingCart';
// import { connect } from 'react-redux';

export default function App() {
  return (
    <div className="App">
      <ShoppingItems />
      <ShoppingCart />
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   itemsInCart: state.itemsInCart
// });

// export default connect(mapStateToProps)(App);
