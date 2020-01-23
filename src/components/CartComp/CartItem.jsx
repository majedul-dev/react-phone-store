import React from "react";

const CartItem = ({ item, value }) => {
  const { id, title, img, total, price, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div>
      <div className="row my-1 text-capitalize text-center cart-item">
        <div className="col-10 mx-auto col-lg-2">
          <img
            className="img-fluid"
            style={{ width: "5rem", height: "5rem" }}
            src={img}
            alt=""
          />
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">Product: </span>
          {title}
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">Price: </span>${price}
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <div className="d-flex justify-content-center">
            <span className="btn btn-black " onClick={() => decrement(id)}>
              -
            </span>

            <span className="btn btn-black mx-1 ">{count}</span>
            <span className="btn btn-black " onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <div className='cart-icon' onClick= {() => removeItem(id)}>
            <i className="fas fa-trash-alt"></i>
          </div>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <strong>item total: $ {total}</strong>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
