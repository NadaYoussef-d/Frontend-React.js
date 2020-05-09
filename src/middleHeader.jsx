import React, { Component } from "react";
import { Link } from "react-router-dom";

class MiddleHeader extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <div className="header__middle container">
            <Link to="#" className="header__logo-box">
              <img className="header__logo" src="img/logo.png" alt="" />
            </Link>
            <div className="header__user-options">
              <Link to="#" className="link">
                Login
              </Link>
              <div className="dropdown">
                <div className="dropdown__header">
                  <div
                    className="image image--small image--circle"
                    style={{ backgroundImage: 'url("img/PersonalImage.png")' }}
                  ></div>
                </div>
                <div className="dropdown__body"></div>
              </div>
              <div className="dropdown dropdown--left">
                <div className="dropdown__header">
                  <div
                    className="image image--small"
                    style={{
                      backgroundImage: "url('img/icons/icon-cart-big.svg')"
                    }}
                  >
                    <div className="notification notification--danger">1</div>
                  </div>
                </div>
                <div className="dropdown__body">
                  <ul className="dropdown__items list list--vr-separator">
                    <li className="dropdown__item list__item">
                      <div className="item-small-1">
                        <div className="item-small-1__data">
                          <Link to="" className="item-small-1__title">
                            Camera X1000
                          </Link>
                          <span className="item-small-1__description">
                            1 X $890
                          </span>
                        </div>
                        <div className="item-small-1__image-box">
                          <Link
                            to="#"
                            className="item-small-1__image image"
                            style={{
                              backgroundImage:
                                'url("img/products/product-1.jpg")'
                            }}
                          ></Link>
                          <Link to="#" className="item-small-1__action">
                            <i className="fas fa-times"></i>
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li className="dropdown__item list__item">
                      <div className="item-small-1">
                        <div className="item-small-1__data">
                          <Link to="" className="item-small-1__title">
                            Camera X2000
                          </Link>
                          <span className="item-small-1__description">
                            2 X $990
                          </span>
                        </div>
                        <div className="item-small-1__image-box">
                          <Link
                            to="#"
                            className="item-small-1__image image"
                            style={{
                              backgroundImage:
                                "url('img/products/product-1.jpg')"
                            }}
                          ></Link>
                          <Link to="" className="item-small-1__action">
                            <i className="fas fa-times"></i>
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="separator"></div>
                  <div className="block">
                    <span className="lable">Total:</span>
                    <span className="lable">$2870</span>
                  </div>
                  <div className="block list list--hr">
                    <Link className="list-item btn btn--gray" to="">
                      View Cart
                    </Link>
                    <Link className="list-item btn btn--primary" to="">
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MiddleHeader;
