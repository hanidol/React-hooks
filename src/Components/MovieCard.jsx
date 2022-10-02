import React from "react";
import "../App.css";
import Rate from "./Rate";

const MovieCard = ({ movie: { title, description, posterURL, rating } }) => {
  return (
    <div className="container">
      <div className="movie">
        <div className="poster">
          <img src={posterURL} alt="description"></img>
        </div>
        <div className="movie-details">
          <div className="box">
            <Rate rating={rating} />
          </div>
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="overview">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
