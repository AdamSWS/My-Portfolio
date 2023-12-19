import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './CustomCard.css';

export default class CustomCard extends Component {
  render() {
    const { title, text, img } = this.props;
    return (
      <Card className="customCard" bg={'dark'} text={'white'}>
        <Row noGutters className="align-items">
          <Col className="cardContent">
            <div className="contentWrapper">
              <div>
                <Card.Title className="cardTitle">{title}</Card.Title>
                <Card.Text className="cardText">{text}</Card.Text>
              </div>
            </div>
          </Col>
          <Col className="cardImageContainer">
            <Card.Img src={img} className="cardImage" thumbnail/>
          </Col>
        </Row>
      </Card>
    );
  }
}
