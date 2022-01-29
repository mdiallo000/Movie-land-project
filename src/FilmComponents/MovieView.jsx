import React, { useEffect, useState } from "react";
import { Link, Params, useParams } from "react-router-dom";
import Banner from "./Banner";

function MovieView() {
  let { id } = useParams();
  const [result, setResult] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [Mypins, setMypins] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ab166ff82684910ae3565621aea04d62&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
      });

    setIsLoading(false);
  }, [id]);
//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
  function setdata() {
    console.log("In Local storage");
    localStorage.setItem("item", JSON.stringify(result));
    console.log(localStorage.getItem("item"));
  }

  function getdata() {
    console.log("inside local storage");
    let items = localStorage.getItem("item");
    console.log(items);
  }

  // getdata()

  /////////   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let load = "Loading.. .. .";

  function rendering() {
    if (isLoading) {
      return <Banner text={load} />;
    }
    if (result) {
      const posterPath = `https://image.tmdb.org/t/p/w500${result.poster_path}`;
      const backdropUrl = `https://image.tmdb.org/t/p/original${result.backdrop_path}`;

      return (
        <>
          <Banner text={result.original_title} backdrop={backdropUrl} />
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
                <h2>{result.original_title}</h2>
                <p className="lead">
                  {result.overview}
                  <br />
                  <br />
                  Release Date: {result.release_date}
                  <br />
                  Runtime: {result.runtime} min
                  <br />
                  Average Rating: {result.vote_average}
                </p>

                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => setdata()}
                >
                  Add to Watchlist{" "}
                </button>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////

  return rendering();
}

export default MovieView;
