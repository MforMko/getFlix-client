import { useState, useEffect } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { SignupView } from '../signup-view/signup-view';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export const MainView = () => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [user, setUser] = useState(storedUser? storedUser : null);
    const [token, setToken] = useState(storedToken? storedToken : null);

    useEffect(() => {
      if (!token) {
        return;
      }

      fetch("https://getflix-29822f4978ec.herokuapp.com/movies", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.json())
      .then((movies) => {
        console.log("Movies data: ", movies);

        const moviesApi = movies.map((movie) => {
          return {
            id:movie._id,
            title: movie.Title,
            description: movie.Description,
            imagePath: movie.ImagePath,
            genre: movie.Genre,
            director: movie.Director,
            featured: movie.Featured
          }
        });
        setMovies(moviesApi);
      });
  }, [token]);

    
      return (
        <Row className="justify-content-md-center">
          {!user ? (
            <Col md={5}>
              <LoginView 
                onLoggedIn={(user, token) => {
                  setUser(user);
                  setToken(token);
                }}
              />
              <Row>
                <Col md={12} className="text-md-center">Or create an account here</Col>
              </Row>
              <SignupView />
            </Col>
          ) : selectedMovie ? (
              <MovieView 
                movie={selectedMovie} 
                onBackClick={() => setSelectedMovie(null)} 
              />
            ) : movies.length === 0 ? (
            <Col md={12} className="text-md-center">The list is empty!</Col>
            ) : (
            <Row>
                {movies.map((movie) => (
                    <Col key={movie.id} md={3}>
                      <MovieCard
                        key={movie.id}
                        movie={movie}
                        onMovieClick={(newSelectedMovie) => {
                          setSelectedMovie(newSelectedMovie);
                        }}
                      />
                    </Col>
                ))}
                
                <button onClick={() => { 
                  setUser(null); 
                  setToken(null); 
                  localStorage.clear(); 
                  }}>
                    Logout
                    </button>
            </Row>
          )};
    </Row>
  );
};
