import { useState, useEffect } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { SignupView } from '../signup-view/signup-view';
import { NavigationBar } from '../navigation-bar/navigation-bar';
import { ProfileView } from '../profile-view/profile-view';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const MainView = () => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [user, setUser] = useState(storedUser ? storedUser : null);
    const [token, setToken] = useState(storedToken ? storedToken : null);

    useEffect(() => {
      if (!token) {
        return;
      }

      fetch("https://getflix-29822f4978ec.herokuapp.com/movies", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.json())
      .then((movies) => {        
        const moviesApi = movies.map((movie) => {
          return {
            id: movie._id,
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

    const addToFavourites = (movieId) => {
      // Assuming `user` is an object that contains a `FavouriteMovies` array
      if (user.FavouriteMovies.includes(movieId)) {
          alert('This movie is already in your favourites list.');
          return;
      }
  
      fetch(`https://getflix-29822f4978ec.herokuapp.com/users/${user.Username}/movies/${movieId}`, {
          method: 'POST',
          headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
          }
      })
      .then(response => {
          if (response.ok) {
              return response.json(); // Assuming the API returns some JSON data
          } else {
              return Promise.reject('Failed to add movie to favourites.');
          }
      })
      .then(data => {
          // Update the user state to reflect the new favorite movie list
          setUser({ ...user, FavouriteMovies: [...user.FavouriteMovies, movieId] });
          alert('Movie added to favourites!');
      })
      .catch(error => {
          console.error('Error adding movie to favourites:', error);
          alert(error);
      });
  };
  


    return (
      <BrowserRouter>
        <NavigationBar
          user={user}
          onLoggedOut={() => {
            setUser(null);
            setToken(null);
            localStorage.clear();
          }}
        />
        <Row className="justify-content-md-center">
          <Routes>
            <Route 
              path="/login"
              element={
                !user ? (
                  <Col md={5}>
                    <LoginView 
                      onLoggedIn={(user, token) => {
                        setUser(user);
                        setToken(token);
                      }}
                    />
                  </Col>
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/signup"
              element={
                !user ? (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/movies/:movieId"
              element={
                !user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <Col md={8}>
                    <MovieView movies={movies} token={token} user={user} addToFavourites={addToFavourites} />
                  </Col>
                )
              }
            />
            <Route
              path="/"
              element={
                !user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <>
                    {movies.length === 0 ? (
                      <Col>The list is empty!</Col>
                    ) : (
                      movies.map((movie) => (
                        <Col key={movie.id} md={3}>
                          <MovieCard
                            movie={movie}
                            onMovieClick={(newSelectedMovie) => {
                              setSelectedMovie(newSelectedMovie);
                            }}
                            onFavourite={addToFavourites}
                          />
                        </Col>
                      ))
                    )}
                  </>
                )
              }
            />
            <Route
                path="/users/:userId"
                element={
                  !user ? (
                    <Navigate to="/login" replace />
                  ) : (
                    <ProfileView token={token} />
                  )
                }
            />
          </Routes>
        </Row>
      </BrowserRouter>
    );
  };
