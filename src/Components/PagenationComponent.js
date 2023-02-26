import React from 'react'
// react paginate liberary
import ReactPaginate from 'react-paginate';
const PagenationComponent = ({getPage,pageCount}) => {
    // handel page click
    const handlePageClickOne = (data)=>{
        getPage(data.selected + 1)
    }
  return (
    <div>
         <ReactPaginate
        breakLabel="..."
        nextLabel="التالى"
        onPageChange={handlePageClickOne}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
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
const PagenationComponentForTrending = ({getPageTrending,pageCount}) => {
    // handel page click
    const handlePageClickTwo = (data)=>{
        getPageTrending(data.selected + 1)
    }
  return (
    <div>
         <ReactPaginate
        breakLabel="..."
        nextLabel="التالى"
        onPageChange={handlePageClickTwo}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
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
const PagenationComponentForNowPlaying = ({getPageMoviesPlayingNow,pageCount}) => {
    // handel page click
    const handlePageClickThree = (data)=>{
      getPageMoviesPlayingNow(data.selected + 1)
    }
  return (
    <div>
         <ReactPaginate
        breakLabel="..."
        nextLabel="التالى"
        onPageChange={handlePageClickThree}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
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
export  {PagenationComponent,PagenationComponentForNowPlaying,PagenationComponentForTrending};
