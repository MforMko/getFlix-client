import React from 'react';
import { Button } from 'react-bootstrap';

export const DeregisterButton = ({ handleDeregister }) => {
    return (
        <Button variant="danger" onClick={handleDeregister} className="mt-3">
            Delete Account
        </Button>
    );
};