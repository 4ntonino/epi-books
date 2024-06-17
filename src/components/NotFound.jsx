import React from 'react'
import { Alert } from 'react-bootstrap'

export default function NotFound() {
  return (
    <Alert variant='danger' className='text-center'>
        <h1>La Pagina non esiste</h1>
    </Alert>
  )
}
