import { prettyDOM } from "@testing-library/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  fetchProducts,
  removeFromCart,
  selectAllProducts,
  selectPrice,
  selectQuantity,
  selectStatus,
} from "../features/products/productsSlice";
import "./Products.css";

function Products() {
  const dispatch = useDispatch();
  const product = useSelector(selectAllProducts);
  const totalQuantity = useSelector(selectQuantity);
  const totalPrice = useSelector(selectPrice);

  useEffect(() => {
    console.log("useEffect called");
    dispatch(fetchProducts());
  }, [dispatch]);

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

  return (
    <div className="container">
      <div className="product">
        <div className="big-photo">
          <img className="big-image" src={product.image} alt={product.title} />
          <div className="image-transform">
            <img src={product.image} alt={product.title}></img>
            <img src={product.image} alt={product.title}></img>
            <img src={product.image} alt={product.title}></img>
            <img src={product.image} alt={product.title}></img>
            <img src={product.image} alt={product.title}></img>
            <img src={product.image} alt={product.title}></img>
          </div>
        </div>

        <div className="right-part">
          <p>{product.title}</p>
          <div className="option">
            <p>
              Options:<span> Foldsack Backpack</span>
            </p>
            <div className="color-options">
              <img src={product.image} alt="firstimage"></img>
              <img src={product.image} alt="secondimage"></img>
              <img src={product.image} alt="thirdimage"></img>
              <img src={product.image} alt="fourthimage"></img>
              <img src={product.image} alt="fifthimage"></img>
            </div>
          </div>
          <div className="cart">
            <div className="price-section">
              <p>NRs.{totalPrice.toFixed(3) + 0.1 * totalPrice.toFixed(3)}</p>
              <p>NRs.{totalPrice.toFixed(2)}</p>
              <div className="discout-section">
                <p>10% off</p>
                <p>You save: NRs.{0.1 * totalPrice.toFixed(3)}</p>
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
            <input placeholder="Your questions"></input>
          </div>
        </div>
      </div>

      {/*Description-specifications-Questions/Answers-Ratings & Reviews*/}
      <div className="details-block">
        <div className="heading-box">
          <div className="headings">
            <p>Description</p>
            <p className="active-heading">Specifications</p>
            <p>Questions/Answers</p>
            <p>Rating & Reviews</p>
          </div>
        </div>
      </div>
      <div className="details">
        <div className="technical-details">
          <h3>Technical Details</h3>
          <div>
            <table>
              <tr>
                <th>Item Weight</th>
                <td>29 pounds</td>
              </tr>
              <tr>
                <th>Dimensions</th>
                <td>38 x 40 x 31.5 inches</td>
              </tr>
              <tr>
                <th>Item model number</th>
                <td>BF29296BR-M52</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="technical-details">
          <h3>Other Details</h3>
          <div>
            <table>
              <tr>
                <th>Item Weight</th>
                <td>29 pounds</td>
              </tr>
              <tr>
                <th>Dimensions</th>
                <td>38 x 40 x 31.5 inches</td>
              </tr>
              <tr>
                <th>Item model number</th>
                <td>BF29296BR-M52</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
