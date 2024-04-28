import { useState } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export const MainView = () => {
    const [movies, setMovies] = useState([
        {
            _id: 1,
            Title: 'Oldboy',
            Description: 'After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days.',
            Genre: {
              Name: 'Thriller',
              Description: 'Movies that create suspense, tension, and excitement, often involving danger and unexpected twists.'
            },
            Director: {
              Name: 'Park Chan-wook',
              Bio: 'Park Chan-wook is a South Korean film director, screenwriter, producer, and former critic.',
              Birth: '1963'
            },
            ImagePath: 'oldboy.jpg',
            Featured: true
          },
          {
            _id: 2,
            Title: 'Cinema Paradiso',
            Description: "A filmmaker recalls his childhood when falling in love with the pictures at the cinema of his home village and forms a deep friendship with the cinema's projectionist.",
            Genre: {
              Name: 'Drama',
              Description: 'Movies that focus on character development, emotion, and interpersonal relationships.'
            },
            Director: {
              Name: 'Giuseppe Tornatore',
              Bio: 'Giuseppe Tornatore is an Italian film director and screenwriter.',
              Birth: '1956'
            },
            ImagePath: 'cinema_paradiso.jpg',
            Featured: false
          },
          {
            _id: 3,
            Title: "Pan's Labyrinth",
            Description: 'In the Falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.',
            Genre: {
              Name: 'Fantasy',
              Description: 'Movies that feature elements of magic, supernatural beings, and imaginary worlds.'
            },
            Director: {
              Name: 'Guillermo del Toro',
              Bio: 'Guillermo del Toro is a Mexican filmmaker, author, and actor.',
              Birth: '1964'
            },
            ImagePath: 'pans_labyrinth.jpg',
            Featured: false
          },
            { _id: 4,
              Title: "Y Tu Mamá También",
              Description: 'In Mexico, two teenage boys and an attractive older woman embark on a road trip and learn a thing or two about life, friendship, sex, and each other.',
              Genre: {
              Name: 'Drama',
              Description: 'Movies that focus on character development, emotion, and interpersonal relationships.'
              },
              Director: {
              Name: 'Alfonso Cuarón',
              Bio: 'Alfonso Cuarón is a Mexican film director, screenwriter, producer, and editor.',
              Birth: '1961'
              },
              ImagePath: 'y_tu_mama_tambien.jpg',
              Featured: false }

                    
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);

    if (selectedMovie) {
        return (
          <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
          );
        }

    if (movies.length === 0) {
        return <div>The list is empty!</div>
    }

    return (
        <div>
           {movies.map((movie) => (
                <MovieCard
                  key={movie._id}
                  movie={movie}
                  onMovieClick={(newSelectedMovie) => {
                    setSelectedMovie(newSelectedMovie);
                  }}
                />
            ))}
        </div>
    );
};