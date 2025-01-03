import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getNowPlaying,
  getNowPlayingPage,
} from "../Redux/Redux-toolkit/Slices/nowPlayingSlice";
import CustomPagination from "./CustomPagination";
import Loading from "./loading";

const NowPlayingList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNowPlaying());
  }, [dispatch]);

  const { movies, loading } = useSelector((state) => state.nowPlayingReducer);

  const handleClick = async (data) => {
    await dispatch(getNowPlayingPage(data.selected + 1));
  };
  return (
    <div className="now-playing-list">
      <Row className="justify-content-center">
        {loading === false ? (
          movies?.results?.length >= 1 ? (
            movies?.results?.map((movie) => {
              return <MovieCard key={movie.id} item={movie} />;
            })
          ) : (
            <h2>لا يوجد افلام...</h2>
          )
        ) : (
          <Loading/>
        )}
      </Row>
      <Row>
        <CustomPagination handleClick={handleClick} data={movies} />
      </Row>
    </div>
  );
};

export default NowPlayingList;
