import React from 'react';
import { Form, Button } from 'react-bootstrap';

export const ProfileForm = ({ formData, handleInputChange, handleFormSubmit }) => {
    return (
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
    );
};