import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { TrendCard } from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingMovies } from "../Redux/Actions/movieAction";

const TrendList = () => {
  const [trend, setTrend] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrendingMovies());
  }, []);

  const trendMoviesData = useSelector((state) => state.trendReducer.trendingMovies);

  useEffect(() => {
    setTrend(trendMoviesData);
  }, [trendMoviesData]);

  return (
    <div className="my-5">
      <Row className="justify-content-center">
        {trend.length >= 1 ? (
          trend.map((trend) => {
            return <TrendCard key={trend.id} trend={trend}></TrendCard>;
          })
        ) : (
          <h2>لا يوجد افلام...</h2>
        )}
      </Row>
    </div>
  );
};

export default TrendList;
