import React from 'react'
import { useParams } from 'react-router-dom'
import fantasy from '../books/fantasy.json';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import CommentArea from './CommentArea';

export default function BookDetail() {

    const { asin } = useParams();
    const book = fantasy.find( b => b.asin === asin); // {} || undefined
    
    console.log(book)
  return (
    <Row>
        <Col md={8}>
            <Row>
                <Col md={5}>
                    <Card style={{ width: "20rem"}}>
                        <Card.Img variant="top" src={book.img} />
                    </Card>
                </Col>
                <Col md={7}>
                    <h1>Dettagli del libro</h1>
                    <ListGroup>
                        <ListGroup.Item>Titolo: {book.title} </ListGroup.Item>
                        <ListGroup.Item>Categoria: {book.category} </ListGroup.Item>
                        <ListGroup.Item>Prezzo: €{book.price}</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Col>
        <Col md={4}>
            <CommentArea asin={asin}  />
        </Col>
    </Row>
  )
}
