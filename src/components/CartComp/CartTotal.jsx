import React from "react";
import { Link } from "react-router-dom";

const CartTotal = ({ value }) => {
  const { cartSubTotal, cartTaxt, cartTotal, clearCart } = value;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                type="button"
                onClick={() => clearCart()}
                className="btn btn-outline-danger text-uppercase mb-3 px5"
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal:</span>
              <strong> $ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">tax:</span>
              <strong> $ {cartTaxt}</strong>
            </h5>
            <h5>
              <span className="text-title">total:</span>
              <strong> $ {cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
