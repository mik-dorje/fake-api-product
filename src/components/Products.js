import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  fetchProducts,
  removeFromCart,
  selectAllProducts,
  selectPrice,
  selectQuantity,
} from "../features/products/productsSlice";
import "./Products.css";

import black1 from "../images/gallery/black-t.jpg";
import black2 from "../images/gallery/black.jpg";
import gray from "../images/gallery/gray.jpg";
import red from "../images/gallery/red.jpg";

function Products() {
  const dispatch = useDispatch();
  const product = useSelector(selectAllProducts);
  const totalQuantity = useSelector(selectQuantity);
  const totalPrice = useSelector(selectPrice);

  const [bigImg, setBigImg] = useState("");

  useEffect(() => {
    console.log("useEffect called");
    dispatch(fetchProducts());
    setBigImg(product.image);
  }, [dispatch, product.image]);

  const descriptionList = product?.description?.split(".");
  descriptionList?.pop();
  const descriptionElement = descriptionList?.map((item) => (
    <li key={item}>
      <span>{item}</span>
    </li>
  ));

  const incrementQuantity = () => {
    dispatch(addToCart(product.price));
  };
  const decrementQuantity = () => {
    dispatch(removeFromCart(product.price));
  };

  const imageChange = (e) => {
    setBigImg(e.target.src);
    const imageOptions = document.querySelector(".color-options").childNodes;
    for (var index = 0; index < imageOptions.length; index++) {
      if (index === Number(e.target.id)) {
        // console.log(imageOptions[index].classList);
        imageOptions[index].classList.add("active-option");
      } else {
        imageOptions[index].classList.remove("active-option");
      }
    }
  };

  return (
    <div className="container">
      <div className="product">
        <div className="big-photo">
          <img className="big-image" src={bigImg} alt={product.title} />
          <div className="image-transform">
            <img src={bigImg} alt={product.title}></img>
            <img src={bigImg} alt={product.title}></img>
            <img src={bigImg} alt={product.title}></img>
            <img src={bigImg} alt={product.title}></img>
            <img src={bigImg} alt={product.title}></img>
            <img src={bigImg} alt={product.title}></img>
          </div>
        </div>

        <div className="right-part">
          <div className="topTitle">
            <p>
              {product.title}
              <span>#1 IN DISPLAY </span>
            </p>
            <div className="wishlist-btn-container">
              <button className="wishlist-btn">
                <i class="fa fa-heart-o" aria-hidden="true"></i>Add to wishlist
              </button>
            </div>
          </div>
          <div className="option">
            <p>
              Options:<span> Best T-Shirt</span>
            </p>
            <div className="color-options">
              <img
                id="0"
                onClick={(e) => imageChange(e)}
                className="active-option"
                src={product.image}
                alt="firstimage"
              ></img>
              <img
                id="1"
                onClick={(e) => imageChange(e)}
                src={black1}
                alt="secondimage"
              ></img>
              <img
                id="2"
                onClick={(e) => imageChange(e)}
                src={black2}
                alt="thirdimage"
              ></img>
              <img
                id="3"
                onClick={(e) => imageChange(e)}
                src={gray}
                alt="fourthimage"
              ></img>
              <img
                id="4"
                onClick={(e) => imageChange(e)}
                src={red}
                alt="fifthimage"
              ></img>
            </div>
          </div>
          <div className="cart">
            <div className="price-section">
              <p>NRs.{(totalPrice + 0.1 * totalPrice).toFixed(2)}</p>
              <p>NRs.{totalPrice.toFixed(2)}</p>
              <div className="discout-section">
                <p>10% off</p>
                <p>You save: NRs.{(0.1 * totalPrice).toFixed(2)}</p>
              </div>
            </div>
            <div className="add-cart">
              <div className="buttons-container">
                <div className="quantity">
                  <p>Quantity</p>
                  <div className="add-remove-button">
                    <button onClick={decrementQuantity}>-</button>

                    <p className="product-count">{totalQuantity}</p>
                    <button onClick={incrementQuantity}>+</button>
                  </div>
                </div>
                <div className="add-to-cart">
                  <button className="add-to-cart-btn">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
          {/* About item*/}
          <div className="about-item">
            <h3>About this item</h3>
            <ul>{descriptionElement}</ul>
          </div>
          {/* Search queries*/}

          <div className="questions">
            <p>Search you queries related to this product</p>
            <i class="fa fa-search"></i>
            <input placeholder="Your questions"></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
