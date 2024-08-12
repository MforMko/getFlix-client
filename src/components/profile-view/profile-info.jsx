import React from'react';
import { Card } from 'react-bootstrap';

export const ProfileInfo = ({ user }) => {
    return (
            <Card.Text>
                <strong>Username:</strong> {user.Username}<br />
                <strong>Email:</strong> {user.Email}<br />
                <strong>Birthday:</strong> {user.Birthday}
            </Card.Text>
    );
};