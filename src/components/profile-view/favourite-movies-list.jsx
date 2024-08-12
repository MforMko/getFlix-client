import React from 'react';
import { Button, Card } from 'react-bootstrap';

export const FavouriteMoviesList = ({ favouriteMovies, removeFromFavourites}) => {
    return (
        <Card.Text>
            <strong>Favourite Movies:</strong>
            <ul>
                {favouriteMovies.map(movieId => (
                    <li key={movieId}> 
                        {movieId} {/* You can replace this with movie title or any other data you have */}
                        <Button variant="danger" size="sm" onClick={() => removeFromFavourites(movieId)}>
                            Remove
                        </Button>
                    </li>
                ))}
            </ul>
        </Card.Text>
    );
};