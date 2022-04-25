import { Form, Modal, Button } from 'react-bootstrap'
import React, { useRef } from 'react'

import { useContacts } from '../../contexts/ContextProvider'

export default function NewPersonModal({ modalClose }) {
  const refID = useRef();
  const refName = useRef();

  const { createContact } = useContacts();

  const handleSubmit = (e) => {
    e.preventDefault()

    createContact(refID.current.value, refName.current.value);
    modalClose()
  }

  return (
    <>
      <Modal.Header closeButton>Create new Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>ID</Form.Label>
            <Form.Control type='text' placeholder='Enter ID' ref={refID} required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' placeholder='Enter name' ref={refName} required></Form.Control>
          </Form.Group>
          <Button type="submit" className='mt-3'>Add new Contact</Button>
        </Form>
      </Modal.Body>
    </>
  )
}
