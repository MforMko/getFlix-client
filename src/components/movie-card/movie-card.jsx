// Import the PropTypes library
import PropTypes from "prop-types";

export const MovieCard = ({ movie, onMovieClick }) => {
    return (
        <div 
             onClick={() => { 
                onMovieClick(movie);
            }}
          >
            {movie.Title}
          </div>
      );
    };

    // Here is where we define all the props constraints for the BookCard
    MovieCard.proptypes = {
      movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        featured: PropTypes.bool
      }).isRequired,
      onMovieClick: PropTypes.func.isRequired
    };