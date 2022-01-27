import React from "react";
import Banner from "./Banner";
import { Link } from "react-router-dom";
const MovieCard = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const detailUrl = `/movies/${movie.id}`
   
    return (
      // The link tag which comes with each movie will send the user to the movie view component. 
          

      <div className="col-lg-3 col-md-3 col-2 my-4">
        <div className="card">
          <img className="card-img-top" src={posterUrl}    onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src='https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-1-816x576.jpg';
            }} />
          <div className="card-body">
            <h5 className="card-title">{movie.original_title}</h5>
            
            
            <Link to={detailUrl} className="btn btn-danger">Show details</Link>
          </div>
        </div>
      </div>
            
    )
  }



function Searching({keyword, movieData}) {
    
  let heroText= `Your Searching For ${keyword}`
  const Card =  movieData?.map((obj,i) =>{
      return (
          <MovieCard movie={obj} key={i} />
  )})
      
//   let rendering = {
//       if (movieData){
//         <Banner text={heroText}/>
//       }
//       else{

//         <Banner text="Sorry, film unavailable"/>
//       }
//   }

    return(


      <div>
       
       
         {movieData ? <Banner text={heroText}/> : <Banner text="Sorry, film unavailable"/>      }
        <div className="container">
        <div className="row">

        {Card}
        </div>

        </div>

      </div>



      ); 
}

export default Searching;
