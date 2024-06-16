import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'


export default function AddComment({ elementId, setAdd, add }) {
  const [comments, setComments] = useState({ comment: '', rate: 0, elementId: elementId });

  const setCommentHandler = (e) => {
    setComments({
      ...comments,
      comment: e.target.value,
      elementId: elementId
    });
  };

  const setRateHandler = (e) => {
    setComments({
      ...comments,
      rate: e.target.value,
      elementId: elementId
    });
  };

  const sendComment = () => {
    fetch('https://striveschool-api.herokuapp.com/api/comments/', {
      method: 'POST',
      body: JSON.stringify(comments),
      headers: { 
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjY2M2NzgxODQ0MjAwMTUzNzU3NWIiLCJpYXQiOjE3MTcxNjAzMTcsImV4cCI6MTcxODM2OTkxN30.bqrIYq7VrpiQgG5X885HS2AfENPgUz0dSGUkrW357Ek' 
      }
    })
    .then(response => response.json())
    .then(data => {
      setAdd(!add);
      setComments({ comment: '', rate: 0, elementId: elementId });
    })
    .catch(error => console.error(error));
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Control 
          type="text" 
          placeholder="Inserisci qui il tuo commento"
          onChange={setCommentHandler}        
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example" onChange={setRateHandler}>
          <option>Open this select menu</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Button variant="dark" onClick={sendComment}>Add Comment</Button>
      </Form.Group>
    </Form>
  );
}
