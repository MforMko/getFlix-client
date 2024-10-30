import "./movie-view.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";
import { Link } from "react-router-dom";


export const MovieView = ({ movies, token, user, addToFavourites }) => {
    const { movieId } = useParams();
    const movie = movies.find((m) => m.id === movieId);
    
    return (
            <>
                <Row className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                    <Col xs={12} md={8} className="text-center">
                        
                        <span><h2>{movie.title}</h2></span><br></br>
                        <span>Description: </span>
                        <span>{movie.description}</span>
                    </Col>
                    <Col>
                        <img src={movie.imagePath} alt={movie.title} classname="movie-image" style={{ width: '100%', maxWidth: '400px', height: 'auto' }} // Example: max width of 400px
                        />
                        <Button
                            className="add-to-fav-button"
                            variant="primary"
                            onClick={() => addToFavourites(movie.id)}
                            style={{ cursor: "pointer" }}
                            >
                                Add to Favourites
                        </Button>
                        <Link to={`/`}>
                            <Button 
                            className="back-button"
                            style={{ cursor: "pointer" }}
                            >
                                Back
                            </Button>
                        </Link>
                    </Col>
                    
                </Row>
            </>
    );
};