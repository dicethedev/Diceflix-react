import React from 'react'


// destructure props and name it "movie"
const  MovieCard = ({ movie })  => {
          return (
        <div className="movie">
          <div>
             <p>{movie.Year}</p>
          </div>

          <div>
            {/* conditional rendering is inside the img tag */}
           <img src={movie.Poster !== 'N/A' ? movie.Poster : 'http://via.placeholder.com/500'} 
               alt={movie.Title} />
          </div>

          <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
          </div>
          </div>
          )
}

export default MovieCard
