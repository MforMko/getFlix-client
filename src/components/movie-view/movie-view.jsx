import "./movie-view.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const MovieView = ({ movies }) => {
    const { movieId } = useParams();

    const movie = movies.find((m) => m.id === movieId);
    
    return (
        <Row className="justify-content-md-center">
            <Col md={8}>
                <img src={movie.imagePath} />
            </Col>
            <Col>
                <span>Title: </span>
                <span>{movie.title}</span>
            </Col>
            <Col>
                <span>Description: </span>
                <span>{movie.description}</span>
            </Col>
            <Link to={`/`}>
                <Button 
                className="back-button"
                style={{ cursor: "pointer" }}
                >
                    Back
                </Button>
            </Link>
        </Row>
    );
};