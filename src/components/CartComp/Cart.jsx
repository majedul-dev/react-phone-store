import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

class Cart extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotal value={value} history={this.props.history} />
                </>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}

export default Cart;
