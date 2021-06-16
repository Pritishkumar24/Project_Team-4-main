import React, { Component } from 'react'
import {Card, Button, Container, Row, Col} from 'react-bootstrap'

export default class Homecontent1 extends Component {
    render() {
        return (
            <div>
               <Container>
                <Card style={{ width: 'auto' }}>
                <Row>
                <Col md ={4}>
                    <Card.Img variant="top" src='assets/images/1.jpg' />
                    </Col>
                    <Col md = {8}>
                    <Card.Body>
                        <Card.Text>
                        Some books text
                        </Card.Text>
                    </Card.Body>
                    </Col>
                    </Row>
                    </Card>
                    </Container>

                    <Container>
                <Card style={{ width: 'auto' }}>
                <Row>
                <Col md = {8}>
                    <Card.Body>
                        <Card.Text>
                        Some books text
                        </Card.Text>
                    </Card.Body>
                    </Col>
                <Col md ={4}>
                    <Card.Img variant="top" src='assets/images/2.jpg' />
                    </Col>
                    </Row>
                    </Card>
                    </Container>

                    <Container>
                <Card style={{ width: 'auto' }}>
                <Row>
                <Col md ={4}>
                    <Card.Img variant="top" src='assets/images/3.jpg' />
                    </Col>
                    <Col md = {8}>
                    <Card.Body>
                        <Card.Text>
                        Some books text
                        </Card.Text>
                    </Card.Body>
                    </Col>
                    </Row>
                    </Card>
                    </Container>
            </div>
        );
            
    }
}
