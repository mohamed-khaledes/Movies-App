import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getPage } from '../Redux/Redux-toolkit/Slices/moviesSlice';
import { getNowPlayingPage } from '../Redux/Redux-toolkit/Slices/nowPlayingSlice';
import { getTrendPage } from '../Redux/Redux-toolkit/Slices/trendSlice';
// react paginate liberary
import ReactPaginate from 'react-paginate';
const PagenationComponent = () => {
  const dispatch = useDispatch()
    const {movies} = useSelector((state)=>state.moviesReducer)

    // handel page click
    const handlePageClickOne = async(data)=>{
      await dispatch(getPage(data.selected + 1))
    }
  return (
    <div>
         <ReactPaginate
        breakLabel="..."
        nextLabel="التالى"
        onPageChange={handlePageClickOne}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={movies?.total_pages || 0}
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
const PagenationComponentForTrending = () => {
    const dispatch = useDispatch()
    const {movies} = useSelector((state)=>state.trendReducer)
    // handel page click
    const handlePageClickTwo = (data)=>{
        dispatch(getTrendPage(data.selected + 1))
    }
  return (
    <div>
         <ReactPaginate
        breakLabel="..."
        nextLabel="التالى"
        onPageChange={handlePageClickTwo}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={movies?.total_pages || 0}
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
const PagenationComponentForNowPlaying = () => {
    const dispatch = useDispatch()
    const {movies} = useSelector((state)=>state.nowPlayingReducer)
    // handel page click
    const handlePageClickThree = async(data)=>{
      await dispatch(getNowPlayingPage(data.selected + 1))
    }
  return (
    <div>
         <ReactPaginate
        breakLabel="..."
        nextLabel="التالى"
        onPageChange={handlePageClickThree}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={movies?.total_pages || 0}
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
