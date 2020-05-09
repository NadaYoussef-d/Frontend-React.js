import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="header__lower container">
          <nav className="nav">
            <ul className="nav__items list list--hr">
              <li className="nav__item">
                <Link className="nav__link" to="prdListing">
                  Home
                </Link>
              </li>
              <li className="nav__item dropdown ">
                <Link className="nav__link dropdown__header" to="#">
                  Products
                </Link>
                <div className="dropdown__body">
                  <ul className=" list">
                    <li className="list__item">
                      <Link className="nav__inner-link" to="prdListing">
                        Product Listing
                      </Link>
                    </li>
                    <li className="list__item">
                      <Link className="nav__inner-link" to="addProduct">
                        Add Product
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="productDetails">
                  Product Details
                </Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="#">
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
