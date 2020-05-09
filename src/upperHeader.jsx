import React, { Component } from "react";
import { Link } from "react-router-dom";

class UpperHeader extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="header__upper">
          <div className="container">
            <ul className="list list--hr list--hr-separator">
              <li className="list__item">
                <span className="info">
                  <i className="info__icon far fa-dot-circle"></i>
                  <span className="info__data">
                    1234 Street Name, City Name
                  </span>
                </span>
              </li>
              <li className="list__item">
                <Link to="#" className="info">
                  <i className="info__icon fab fa-whatsapp"></i>
                  <span className="info__data">123-456-7890</span>
                </Link>
              </li>
              <li className="list__item">
                <Link to="#" className="info">
                  <i className="info__icon far fa-envelope"></i>
                  <span className="info__data">mail@domain.com</span>
                </Link>
              </li>
            </ul>
            <ul className="list list--hr">
              <li className="list__item">
                <Link to="#" className="link">
                  <i className="link__icon fas fa-angle-right"></i>
                  About Us
                </Link>
              </li>
              <li className="list__item">
                <Link to="#" className="link">
                  <i className="link__icon fas fa-angle-right"></i>
                  Contact Us
                </Link>
              </li>
              <li className="list__item">
                <div className="dropdown ">
                  <div className="dropdown__header">
                    <Link to="#" className="link">
                      <img className="flag flag-us" src="" alt="" />
                      English
                    </Link>
                    <i className="fas fa-angle-down"></i>
                  </div>

                  <div className="dropdown__body">
                    <ul className="dropdown__items list">
                      <li className="dropdown__item list__item">
                        <Link to="#" className="link">
                          <img className="flag flag-us" src="" alt="" />
                          English
                        </Link>
                      </li>
                      <li className="dropdown__item list__item">
                        <Link to="#" className="link">
                          <img className="flag flag-es" src="" alt="" />
                          Español
                        </Link>
                      </li>
                      <li className="dropdown__item list__item">
                        <Link to="#" className="link">
                          <img className="flag flag-fr" src="" alt="" />
                          Française
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UpperHeader;
