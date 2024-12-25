import React from 'react'
// react paginate liberary
import ReactPaginate from 'react-paginate';

const CustomPagination = ({handleClick,data,}) => {
  return (
    <div>
        <ReactPaginate
        breakLabel="..."
        nextLabel="التالى"
        onPageChange={handleClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={data?.total_pages || 0}
        previousLabel="السابق"
        renderOnZeroPageCount={null}
        containerClassName={"pagination justify-content-center align-items-center p-3"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        // previousClassName={"page-link"}
        // nextClassName={"page-link"}
        breakClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  )
}
export default CustomPagination