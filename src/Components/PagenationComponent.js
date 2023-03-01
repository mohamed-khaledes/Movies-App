import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getPage,getPageTrending,getPagePlayingNow } from '../Redux/Actions/movieAction';
// react paginate liberary
import ReactPaginate from 'react-paginate';
const PagenationComponent = () => {
  const [pageCount,setPageCount] = useState(0);

    const dispatch = useDispatch()

    const pages = useSelector((state)=>state.moviesReducer.pageCount)

    useEffect(()=>{
      setPageCount(pages)
    },[])

    // handel page click
    const handlePageClickOne = (data)=>{
      dispatch(getPage(data.selected + 1))
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
const PagenationComponentForTrending = () => {
  const [pageCount,setPageCount] = useState(0);

    const dispatch = useDispatch()

    const pages = useSelector((state)=>state.trendReducer.pageCount)

    useEffect(()=>{
      setPageCount(pages)
    },[])

    // handel page click
    const handlePageClickTwo = (data)=>{
        dispatch(getPageTrending(data.selected + 1))
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
const PagenationComponentForNowPlaying = () => {

  const [pageCount,setPageCount] = useState(0);

    const dispatch = useDispatch()

    const pages = useSelector((state)=>state.nowPlayingReducer.pageCount)

    useEffect(()=>{
      setPageCount(pages)
    },[])

    // handel page click
    const handlePageClickThree = (data)=>{
      dispatch(getPagePlayingNow(data.selected + 1))
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
