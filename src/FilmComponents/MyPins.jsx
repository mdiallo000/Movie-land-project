import React from "react";
import Banner from "./Banner";
import { Link } from "react-router-dom";
function MyPins() {
  
  
  
  let mysaves = localStorage.getItem("item");
  let pin = JSON.parse(mysaves);

  const posterPath = `https://image.tmdb.org/t/p/w500${pin.poster_path}`;
  const detailUrl = `/movies/${pin.id}`
  return (
    <div>
      <Banner text="My Watch List" />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-3">
            <img
              src={posterPath}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src =
                  "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-1-816x576.jpg";
              }}
              className="img-fluid shadow rounded"
            />
          </div>
          <div className="col-md-9">
            {/* <h2>{pin.original_title}</h2>
            <p className="lead">
              {pin.overview}
              <br />
              <br />
              Release Date: {pin.release_date}
              <br />
              Runtime: {pin.runtime} min
              <br />
              Average Rating: {pin.vote_average}
            </p> */}
            <Link to={detailUrl} className="btn btn-danger">Show More details</Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPins;
