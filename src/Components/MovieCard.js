import React from "react";
import { Col, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const MovieCard = ({ item }) => {
  return (
    <Col
      xs="12"
      sm="6"
      md="4"
      lg="3"
      xl="2"
      className="my-3 d-flex justify-content-center"
    >
      <Link to={`/movieDetails/:${item.id}`}>
        <Card style={{ width: "18rem" }} className="card">
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500` + item.poster_path}
            className="card-img"
          />
          <div className="card-overlay">
            <h4>اسم الفيلم:{item.original_title}</h4>
            <p>تاريخ الاصدار: {item.release_date}</p>
            <p>اللغه: {item.original_language}</p>
            <p>
              التقييم:{" "}
              <FaStar
                style={{ color: "goldenrod", margin: "-4px 5px 0" }}
              ></FaStar>
              {item.vote_average}
            </p>
          </div>
        </Card>
      </Link>
    </Col>
  );
};
export default MovieCard;
