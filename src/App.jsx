
import { useState, useEffect } from 'react';
import "./App.css"

import SearchIcon from './Search.svg'
import MovieCard from './Components/MovieCard'


const API_URL = 'https://www.omdbapi.com?apikey=bc18cb9b';


// Using this to test the styling and functionality
// const movie1 = {
// "Title": "Spiderman",
//  "Year": "2010", 
//  "imdbID": "tt1785572",
//  "Type": "movie",
//  "Poster": "N/A"
// }


const App = () => {

      const [movies, setMovies] =  useState([]);
      const [searchThis, setSearchThis] = useState('');


      const searchMovies = async (title) => {
      const res = await  fetch(`${API_URL}&s=${title}`);
      const data = await res.json();

     //  console.log(data.Search);
     setMovies(data.Search);
     }

     useEffect(() =>{
       searchMovies('Spiderman');
     }, [])

     return (
     <div className='app'>
          <h1>Diceflix</h1>

          <div className='search'>
               {/* before value='Superman' and now value={searchThis} */}
               <input placeholder='Search for Movies on Diceflix' value={searchThis}
               onChange={(e) => setSearchThis(e.target.value)} />

               <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchThis)} />
          </div>


          {/* Checking through the movies while conditioning the div properties */}
          {movies?.length > 0 
               ? (
                   <div className="container">
                  {movies.map((movie) => (
                       <MovieCard movie={movie} />
                  ))}
                   {/* <MovieCard movie1={movie1} /> */}
                   </div>
               ) : (
                  <div className="empty">
                     <h2>No Movies</h2> 
                  </div>
               )}

        {/*  <div className="container">
           <MovieCard movie1={movie1} />
           </div> */}
     </div>
     );
}

export default App;

//api key = bc18cb9b
