import "./movie-view.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const MovieView = ({ movie, onBackClick }) => {
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
            <Button 
              onClick={onBackClick} 
              className="back-button"
              style={{ cursor: "pointer" }}
              >
                Back
            </Button>
        </Row>
    );
};