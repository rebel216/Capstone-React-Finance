import React from 'react';
import { Button } from 'react-bootstrap';

const NotFound = () => (
  <div className="text-center mt-5">
    <h1>404 - Not Found!</h1>
    <Button variant="success">
      <a href="/Capstone-React-Finance" className="text-light"> Go Home</a>
    </Button>
  </div>
);

export default NotFound;
