import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

import PrdItem from "./prdItem";
import Category from "./category";
import Paging from "./paging";

import { GetAllCategoryItems } from "./services/category-Service";
import { GetProducts } from "./services/products-Service";

class PrdListing extends Component {
  state = {
    products: [],
    category: [],
    categoryId: "",
    pageSize: 4,
    currentPage: 1,
    searchInput: "",
    count: 0
  };

  async componentDidMount() {
    let { categoryId, pageSize, currentPage, searchInput } = this.state;

    const { data } = await GetProducts(
      categoryId,
      searchInput,
      currentPage,
      pageSize
    );
    const { data: catData } = await GetAllCategoryItems();
    const count = data.count;
    this.setState({ products: data.products, category: catData, count });
  }

  handleFilter = async item => {
    let { pageSize, currentPage, searchInput } = this.state;
    const { data } = await GetProducts(
      item.id,
      searchInput,
      (currentPage = 1),
      pageSize
    );
    const count = data.count;

    this.setState({
      products: data.products,
      categoryId: item.id,
      currentPage: 1,
      count
    });
  };
  handleSorting = products => {
    // products.map(prd =>  prd.data.name )
    // console.log(prd)
    // const sortedPrds = _.orderBy(products, ["name"]);
    // console.log(sortedPrds);
    // isSorted != isSorted;
    // this.setState({ isSorted : !isSorted });

    console.log("sortedPrds");
  };

  handlePageChange = async pg => {
    let { categoryId, searchInput, pageSize } = this.state;
    console.log(pg);
    const { data } = await GetProducts(categoryId, searchInput, pg, pageSize);
    this.setState({ products: data.products, currentPage: pg });
  };
  handleSearch = async e => {
    let { categoryId, pageSize, currentPage } = this.state;
    const textInput = e.target.value;
    const { data } = await GetProducts(
      categoryId,
      textInput,
      currentPage,
      pageSize
    );
    this.setState({ products: data.products, searchInput: textInput });
    console.log(textInput);
  };

  render() {
    let {
      products,
      category,
      categoryId,
      pageSize,
      currentPage,
      searchInput,
      count
    } = this.state;

    return (
      <React.Fragment>
        <div className="container">
          {/* <!-- filters --> */}
          <section className="filters">
            {/* <!-- search box --> */}
            <div className="search-box">
              <input
                className="search-box__input"
                placeholder="Search..."
                type="text"
                name="txt_search"
                id=""
                onChange={this.handleSearch}
              />
              <button type="submit" className="search-box__btn">
                <i className="fas fa-search"></i>
              </button>
            </div>
            {/* <!-- filter list --> */}
            <div>
              {/* <!-- filter header --> */}
              <h5>Categories</h5>
              {category.map(cat => (
                <Category
                  key={cat.id}
                  categoryItem={cat}
                  onChange={this.handleFilter}
                />
              ))}
            </div>
            {/* <!-- related items --> */}
            <div>
              {/* <!-- title --> */}
              {/* <h5></h5> */}
              {/* <!-- small item --> */}
              <div></div>
              <div></div>
              <div></div>
            </div>
          </section>
          {/* <!-- Items --> */}
          <section className="item-listing">
            {/* <!-- tools (sorting , change view , exporting) --> */}
            <div className="item-listing__tools">
              <select
                className="form-control"
                name=""
                id=""
                onChange={() => this.handleSorting(products)}
              >
                <option value="1">Featured</option>
                <option value="2">Price low to high</option>
                <option value="3">Price high to low</option>
                <option value="4">Name</option>
              </select>
              <div className="action-btn">
                <Link to="/addProduct">
                  <i className="fas fa-plus"></i>
                </Link>
              </div>
            </div>
            {/* <!-- items --> */}
            <div className="item-listing__items item-listing--3items">
              {/* <!-- medium item --> */}
              {products.map((
                prd // replaced the (products)by activepg to run paging
              ) => (
                <PrdItem key={prd.name} product={prd} />
              ))}
            </div>
            {/* <!-- paging --> */}
            {pageSize < count && (
              <Paging
                count={count}
                pagesize={pageSize}
                current={currentPage}
                onChange={this.handlePageChange}
              />
            )}
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default PrdListing;
