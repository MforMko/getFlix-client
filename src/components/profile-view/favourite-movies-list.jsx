import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';

export const FavouriteMoviesList = ({ favouriteMovies, removeFromFavourites}) => {
    return (
        
            <Row>
                {favouriteMovies.map(movieId => (
                    <Col key={movieId} xs={12} md={6} lg={3} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{movieId} {/* You can replace this with movie title or any other data you have */}</Card.Title>
                                <Button variant="danger" size="sm" onClick={() => removeFromFavourites(movieId)}>
                                    Remove from favourites
                                </Button>
                            </Card.Body>    
                        </Card>
                    </Col>            
                ))}
            </Row>
        );
    };