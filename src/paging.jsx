import React from "react";
import _ from "lodash";

const Paging = props => {
  const { count, pagesize, current, onChange } = props;
  const pages = count / pagesize;
  const arr = _.range(1, pages + 1); //to generates numbers of pages in arr

  return (
    <React.Fragment>
      {/* <!-- paging --> */}
      <div className="paging">
        {/* <!-- left arrow --> */}
        <div className="paging__arrow">
          <i className="fas fa-angle-left"></i>
        </div>
        {/* <!-- page number --> */}
        {arr.map(page => (
          <div
            key={page}
            className={
              current === page ? "paging__number active" : "paging__number"
            }
            onClick={() => onChange(page)}
          >
            {page}
          </div>
        ))}

        {/* <!-- right arrow --> */}
        <div className="paging__arrow">
          <i className="fas fa-angle-right"></i>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Paging;
