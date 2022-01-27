import './App.css';
import NavBar from './FilmComponents/NavBar';
import {Routes,Route} from "react-router-dom"
import Lobby from './FilmComponents/Lobby';
import Searching from './FilmComponents/Searching';
import { useEffect,useState } from 'react';
import ErrorPage from "./FilmComponents/ErrorPage"
import MovieView from './FilmComponents/MovieView';
import MyPins from './FilmComponents/MyPins';

function App() {
  const[searchData, setSearchData] = useState('')
  const [movieData, setMovieData] = useState([]) 
  


  useEffect(()=>{
    if(searchData){

      fetch(`https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${searchData}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data =>{
        setMovieData(data.results)
        console.log(data.results)
      })
      
    }

  }, [searchData])


  
  return (
    <div >
      <NavBar searchData={searchData} setSearchData={setSearchData} />
      <Routes>
    <Route exact path="/"   element={<Lobby/>}/>
    <Route exact path="/pins"   element={<MyPins/>}/>
    <Route exact path="/search"   element={<Searching keyword={searchData} movieData={movieData}/>}/>
    <Route path = "/movies/:id" element = {<MovieView  movieData={movieData} />} />
    <Route path= "/*"   element={<ErrorPage/>} /> 
      </Routes>
     
    </div>
  );
}

export default App;
