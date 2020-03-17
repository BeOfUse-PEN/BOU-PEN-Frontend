import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import bg from '../assets/bg.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${bg}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 500px;
    position: centre;
    z-index: -2;
    font-family:Comic Sans MS;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: centre;
    top: 10;
    left: 10;
    bottom:100;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
      
        <h1>Welcome to PEN</h1>
        <p>“You take care of the sowing and we'll take care of the growing</p>
        <p>“You take care of the sowing and we'll take care of the growing.”

Afterall education is sowing the seeds, to reap it's benefits later.</p>



      </Container>
    </Jumbo>
  </Styles>
)