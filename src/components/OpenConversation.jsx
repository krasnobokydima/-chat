import React, { useState } from 'react';
import { useConversations } from '../contexts/ConversationProvider';
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap';

export default function OpenConversation() {
  const { selectedConversation, sendMessage } = useConversations();
  const [text, setText] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage(selectedConversation.recipients.map(r => r.id), text)
    setText('')
  }

  return (
    <div className='d-flex flex-column flex-grow-1' style={{background: 'lightgrey'}}>
    <div className='flex-grow-1'>
      {JSON.stringify(selectedConversation)}
    </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <InputGroup>
            <FormControl
              className="rounded-0"
              as="textarea"
              required
              type='text'
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ height: '75px', resize: 'none' }}
            >
            </FormControl>
            <Button className="rounded-0" type="submit">Send</Button>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  )
}
