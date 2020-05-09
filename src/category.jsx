import React, { Component } from "react";
//import { Link } from "react-router-dom";

class Category extends Component {
  state = {};
  render() {
    const { categoryItem, onChange } = this.props;
    return (
      <React.Fragment>
        {/* <!-- filter list --> */}
        <ul className="list list--vr-separator">
          <li
            className="link list__item"
            onClick={() => onChange(categoryItem)}
          >
            <i className="link__icon fas fa-angle-right"></i>
            {categoryItem.name}
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Category;
