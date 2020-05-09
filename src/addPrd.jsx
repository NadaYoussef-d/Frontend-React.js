import React, { Component } from "react";
import { Link } from "react-router-dom";

import { IsAuthorized } from "./services/authorization-Service";

class AddPrd extends Component {
  state = {
    product: {
      name: "",
      price: "",
      description: "",
      discount: ""
    }
  };
  handleChange = e => {
    console.log(e.target.value);
    const newProduct = { ...this.state.product };
    newProduct[e.target.name] = e.target.value;
    this.setState({ product: newProduct });
  };
  handleProductAdding = async e => {
    debugger;
    e.preventDefault();
    const authorized = await IsAuthorized(this.state.product);
    if (authorized) {
      this.props.history.push("/prdListing");
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className=" container">
          <form className="add-product" action="">
            <div className="add-product__images slider">
              <div className="add-product__image-actions">
                <div className="add-product__image-action">
                  <Link to="#">
                    <i className="fas fa-plus-square"></i>
                  </Link>
                  <Link to="#">
                    <i className="fas fa-edit"></i>
                  </Link>
                  <Link to="#">
                    <i className="fas fa-trash-alt"></i>
                  </Link>
                </div>
              </div>
              <div className="slider__items">
                <div
                  className="slider__item active"
                  style={{
                    backgroundImage: "url('img/products/product-grey-7.jpg')"
                  }}
                ></div>
                <div
                  className="slider__item"
                  style={{
                    backgroundImage: "url('img/products/product-grey-7.jpg')"
                  }}
                ></div>
                <div
                  className="slider__item"
                  style={{
                    backgroundImage: "url('img/products/product-grey-7.jpg')"
                  }}
                ></div>
              </div>
              <div className="slider__indicators">
                <span className="slider__indicator active"></span>
                <span className="slider__indicator"></span>
                <span className="slider__indicator"></span>
              </div>
            </div>
            <div className="add-product__data">
              <div className="form-controls">
                <section className="tabs">
                  <div className="tabs__headers">
                    <div className="tabs__header active">English</div>
                    <div className="tabs__header">Arabic</div>
                  </div>
                  <div className="tabs__bodies">
                    <div className="tabs__body active">
                      <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          id=""
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">Description</label>
                        <textarea
                          className="form-control"
                          name="description"
                          id=""
                          cols="30"
                          rows="4"
                          onChange={this.handleChange}
                        ></textarea>
                      </div>
                    </div>
                    {/* <div className="tabs__body ">
                      <div className="form-group invalid">
                        <label htmlFor="">Name</label>
                        <input
                          className="form-control"
                          type="text"
                          name=""
                          id=""
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">Description</label>
                        <textarea
                          className="form-control"
                          name=""
                          id=""
                          cols="30"
                          rows="4"
                        ></textarea> */}
                    {/* </div>
                    </div> */}
                  </div>
                </section>

                <div className="form-group">
                  <label htmlFor="">Price</label>
                  <input
                    className="form-control"
                    type="text"
                    name="price"
                    id=""
                    onChange={this.handleChange}
                  />
                </div>
                <div className="add-product__discount">
                  {/* <div className="form-group">
                    <label htmlFor="">Satus</label>
                    <div className="form-group__radios">
                      <div className="form-group__radio">
                        <input type="radio" name="" id="" />
                        <span>On Sale</span>
                      </div>
                      <div className="form-group__radio">
                        <input type="radio" name="" id="" />
                        <span>Not On Sale</span>
                      </div>
                    </div>
                  </div> */}
                  <div className="form-group">
                    <label htmlFor="">Discount</label>
                    <input
                      className="form-control"
                      type="text"
                      name="discount"
                      id=""
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                {/* <div className="form-group">
                  <label htmlFor="">Payment Types</label>
                  <div className="form-group__checkboxs">
                    <div className="form-group__checkbox">
                      <input type="checkbox" name="" id="" />
                      <span>Direct Bank Transfare</span>
                    </div>
                    <div className="form-group__checkbox">
                      <input type="checkbox" name="" id="" />
                      <span>Cheque Payment</span>
                    </div>
                    <div className="form-group__checkbox">
                      <input type="checkbox" name="" id="" />
                      <span>Paypal</span>
                    </div>
                    <div className="form-group__checkbox">
                      <input type="checkbox" name="" id="" />
                      <span>Visa</span>
                    </div>
                    <div className="form-group__checkbox">
                      <input type="checkbox" name="" id="" />
                      <span>Mastercard</span>
                    </div>
                    <div className="form-group__checkbox">
                      <input type="checkbox" name="" id="" />
                      <span>On Dilivery</span>
                    </div>
                  </div>
                </div> */}
                {/* <div className="form-group">
                  <label htmlFor="">Category</label>
                  <select className="form-control" name="" id="">
                    <option value="">Arts & Crafts</option>
                  </select>
                </div> */}

                {/* <div className="taged-textbox form-group">
                  <label className="taged-textbox__lable" htmlFor="">
                    Tags
                  </label>
                  <div className="taged-textbox__data">
                    <div className="taged-textbox__tags">
                      <div className="taged-textbox__tag">
                        <span>tag1</span>
                        <Link to="#" className="taged-textbox__remove">
                          <i className="fas fa-times"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="taged-textbox__clear">
                      <Link to="#">
                        <i className="fas fa-times"></i>
                      </Link>
                    </div>
                  </div>
                  <input
                    className="taged-textbox__textbox form-control"
                    type="text"
                    name=""
                    id=""
                  />
                </div> */}
                <div className="add-product__actions">
                  <button className="btn btn--gray">
                    <Link to="prdListing">Cancel</Link>
                  </button>
                  <button
                    // to="#"
                    onClick={this.handleProductAdding}
                    className="btn btn--primary"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default AddPrd;
