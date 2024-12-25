import React, {useEffect } from "react";
import { Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { getTrendMovies, getTrendPage } from "../Redux/Redux-toolkit/Slices/trendSlice";
import CustomPagination from "./CustomPagination";
const TrendList = () => {
  const dispatch = useDispatch();
  // useEffect
  useEffect(() => {
    dispatch(getTrendMovies());
  }, [dispatch]);
  // get the data from the state
  const {movies,loading} = useSelector((state) => state.trendReducer);

   const handleClick = async(data)=>{
      await dispatch(getTrendPage(data.selected + 1))
    }
    
  return (
    <div className="my-5">
      <Row className="justify-content-center">
        {
          loading===false?
          movies?.results?.length >= 1 ? (
            movies?.results?.map((movie) => {
              return <MovieCard key={movie.id} item={movie}/>
            })
          ) : (
            <h2>لا يوجد افلام...</h2>
          )
          :
          <h2>...loading</h2>
        }
      </Row>
      <Row>
          <CustomPagination handleClick={handleClick} data={movies}/>
        </Row>
    </div>
  );
};

export default TrendList;
