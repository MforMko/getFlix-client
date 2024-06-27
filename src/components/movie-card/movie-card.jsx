// Import the PropTypes library
import PropTypes from "prop-types";
import { Col, Button, Card } from "react-bootstrap";

export const MovieCard = ({ movie, onMovieClick }) => {
    return (
        <Col md={10}>
          <Card 
              onClick={() => { 
                  onMovieClick(movie);
              }}
            >
              <Card.Img variant="top" src={movie.imagePath} />
              <Card.Body>
                <Col>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
                <Button onClick={() => 
                  onMovieClick(movie)} variant="link">
                  Open
                </Button>
                </Col>
                
              </Card.Body>
          </Card>
        </Col>  
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