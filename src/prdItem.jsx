import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import { IsAuthorized } from "./services/authorization-Service";
class PrdItem extends Component {
  state = {};
  // handleEdit = async product => {
  //   console.log(product);
  //   const id = product._id;
  //   console.log(id);

  //   const authorized = await IsAuthorized(product, id);
  //   // if (authorized) {
  //   //   this.props.history.push("/prdListing");
  //   // }
  // };
  handleDel = async product => {
    console.log(product);
    const id = product._id;
    console.log(id);
    const deleted = await IsAuthorized(null, id);
  };
  render() {
    const { product } = this.props;
    return (
      <React.Fragment>
        <div className="item-medium-1">
          {product.discount ? (
            <div className="item-medium-1__alert">Sale</div>
          ) : null}
          <div
            className="item-medium-1__image image"
            style={{
              backgroundImage: "url('img/products/product-grey-1.jpg')"
            }}
          >
            <Link to="#" className="item-medium-1__action">
              Add to Cart
            </Link>
          </div>
          <Link to="#">
            <h4 key={product.id}>{product.name}</h4>
            <div className="flex-row">
              <div>
                {product.discount ? <del>${product.price}</del> : null}
                <span className="lable">
                  {product.discount
                    ? product.price - product.discount
                    : product.price}
                </span>
              </div>
            </div>
          </Link>
          <div className="crud-actions">
            <Link to="#">
              <i className="far fa-eye"></i>
            </Link>
            <Link
              to="/addProduct"
              // onClick={() => this.handleEdit(product, product.id)}
            >
              <i className="fas fa-edit"></i>
            </Link>
            <Link to="#" onClick={() => this.handleDel(product)}>
              <i className="fas fa-trash-alt"></i>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PrdItem;
