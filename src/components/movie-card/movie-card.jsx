import React from "react";
import PropTypes from "prop-types"; // Import the PropTypes library
import { Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
    return (
        <Col md={10}>
          <Card>
              <Card.Img variant="top" src={movie.imagePath} />
              <Card.Body>
                <Col>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
                <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
                  <Button variant="link">
                    Open
                  </Button>
                </Link>
                </Col>
               </Card.Body>
          </Card>
        </Col> 
        
        
      
      );
    };

    // Here is where we define all the props constraints for the MovieCard
    MovieCard.propTypes = {
      movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imagePath: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        featured: PropTypes.bool
      }).isRequired,
    };