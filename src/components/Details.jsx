import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import Styled from "styled-components";

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            title,
            img,
            price,
            company,
            inCart,
            info
          } = value.detailProduct;
          return (
            <>
              <div className="container">
                {/* Title  */}
                <div className="row">
                  <div className="col-10 text-center text-blue mx-auto text-slanted py-5">
                    <h1>{title}</h1>
                  </div>
                </div>
                {/* Title end */}

                {/* Product info */}
                <div className="row">
                  <div className="col-10 col-md-6 mx-auto my-3 text-capitalize">
                    <img src={img} className="img-fluid" alt="" />
                  </div>
                  {/* Product Text */}
                  <div className="col-10 mx-auto col-md-6 my3 text-capitalize">
                    <h2>modle: {title}</h2>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                      {company}
                    </h4>
                    <h4 className="text-blue">
                      <strong>
                        price: <span>$</span>
                        {price}
                      </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      some info about product:
                    </p>
                    <p className="text-muted">{info}</p>
                    <Link to="/">
                      <ButtonContainer>Bact to product</ButtonContainer>
                    </Link>
                    <ButtonContainer cart 
                      disabled={inCart ? true : false} 
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                        {inCart ? "In Cart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
