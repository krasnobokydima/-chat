import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useContacts } from '../../contexts/ContextProvider'
import { useConversations } from '../../contexts/ConversationProvider'

export default function NewConversationModal({ modalClose }) {
  const [selectedContactIds, setSelectedContactIds] = useState([])
  const { contacts } = useContacts()
  const { createConversations } = useConversations()

  const handleCheckboxChange = (contactId) => {
    if (selectedContactIds.includes(contactId)) {
      setSelectedContactIds(prev => prev.filter(id => id !== contactId))
    } else {
      setSelectedContactIds(prev => [...prev, contactId])
    } 
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    createConversations(selectedContactIds)
    modalClose()
  }

  return (
    <>
      <Modal.Header closeButton>Create new conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => handleSubmit(e)}>
          {contacts.map(contact => (
            <Form.Group key={contact.id}>
              <Form.Check
                type="checkbox"                
                value={selectedContactIds.includes(contact.id)}
                onClick={() => handleCheckboxChange(contact.id)}
                label={contact.name}
              />

            </Form.Group>
          ))}
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  )
}
