import logo from './logo.svg';
import './App.css';
import React from 'react';
import Image from './Image';
import Name from './Name';  
import Description from './Description';  
import Price from './Price';
import {Card, Container} from 'react-bootstrap';

const firstName = "Taha";

function App() {
    return (
        <Container className="mt-5">
          <Card style={{ width: '18rem' }} className="mx-auto">
            <Card.Body>
              <Image />
              <Name />
              <Description />
              <Price />
              </Card.Body>
          </Card>
          <p className="text-center mt-3">
                {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
            </p>
        </Container>
    );
}

export default App;

