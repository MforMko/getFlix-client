import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

export const ProfileView = ({ token }) => {            
            const { userId } = useParams();
            const [user, setUser] = useState(null);
            const [formData, setFormData] = useState({
                Username: '',
                Password: '',
                Email: '',
                Birthday: ''
            });
            const navigate = useNavigate();

    useEffect(() => {
        let user = localStorage.getItem("user");
        let parsedUser = JSON.parse(user);

        fetch(`https://getflix-29822f4978ec.herokuapp.com/users/${parsedUser.Username}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then(response => response.json())
        .then(data => {
            setUser(data);
            setFormData({
                Username: data.Username,
                Password: '',
                Email: data.Email,
                Birthday: data.Birthday
            });
        })

        .catch(error => console.error('Error fetching user data:', error));
    }, [userId, token]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        fetch(`https://getflix-29822f4978ec.herokuapp.com/users/${user.Username}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Username: formData.Username,
                Password: formData.Password,
                Email: formData.Email,
                Birthday: formData.Birthday
            })
        })
        .then(response => response.json())
        .then(updatedUser => {
            setUser(updatedUser);
            localStorage.setItem('user', JSON.stringify(updatedUser));
            alert('Profile updated successfully!');
        })
        .catch(error => console.error('Error updating user data:', error));
    };

    const handleDeregister = () => {
        fetch(`https://getflix-29822f4978ec.herokuapp.com/users/${user.Username}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` },
        })
        .then(response => {
            if (response.ok) {
                alert('Account deleted successfully!');
                localStorage.removeItem('user');
                localStorage.removeItem('token');
                navigate('/signup');
            } else {
                alert('Error deleting account');
            }
        })
        .catch(error => console.error('Error deleting user account:', error));
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={8}>
                    <Card>
                        <Card.Body>
                            <Card.Title><h3>{user.Username}'s Profile</h3></Card.Title>
                            <Card.Text>
                                <strong>Username:</strong> {user.Username}
                            </Card.Text>
                            <Card.Text>
                                <strong>Email:</strong> {user.Email}
                            </Card.Text>
                            <Card.Text>
                                <strong>Birthday:</strong> {user.Birthday}
                            </Card.Text>
                            <Card.Text>
                                <strong>Favourite Movies:</strong> {user.FavouriteMovies.join(', ')}
                            </Card.Text>
                            <h3>Update Profile</h3>
                            <Form onSubmit={handleFormSubmit}>
                                <Form.Group controlId="formUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="Username"
                                        value={formData.Username}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="Password"
                                        value={formData.Password}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="Email"
                                        value={formData.Email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBirthday">
                                    <Form.Label>Birthday</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="Birthday"
                                        value={formData.Birthday}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Update
                                </Button>
                            </Form>
                            <Button variant="danger" onClick={handleDeregister} className="mt-3">
                                Delete Account
                            </Button>
                            {/* Add more user information here */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
