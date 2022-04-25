import React, { useState } from 'react';
import { useConversations } from '../contexts/ConversationProvider';
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap';
// import Conversations from './Sidebar/Conversations';

export default function OpenConversation() {
  const { selectedConversation, sendMessage } = useConversations();
  const [text, setText] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage(selectedConversation.recipients.map(r => r.id), text)
    setText('')
  }
  return (
    <div className='open'>
      <div className='open__header'>
        <div className='user__avatar open__icon icon icon--male'></div>
        {selectedConversation.recipients.map(p => p.name).join(', ')}
      </div>
      <div className='flex-grow-1 overflow-auto'>
        <div className='
          d-flex
          flex-column
          justify-content-end
          px-3'
        >
          {selectedConversation.messages.map((message, index) => {
            const { text, sender, fromMe } = message 
            return (
              <div
                key={index}
                className={`
                  d-flex
                  flex-column
                  my-1
                  ${fromMe ? 'align-self-end' : '' }`
                }
                style={{width: 'max-content', maxWidth: '100%'}}
              >
                <div
                  className={`
                      rounded
                      px-2
                      py-1 
                      ${fromMe ? 'bg-primary text-white' : 'border'}
                  `}
                  style={{
                    width: '100%',
                    maxWidth: '300px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    wordBreak: 'break-all',
                    hyphens: 'auto',
                    }}
                >
                  {text}
                </div>
                <div className={`
                  small
                  text-muted
                  ${fromMe ? 'align-self-end' : ''}`}
                >
                  {fromMe ? 'You' : sender}
                </div>
              </div>
              )
          })}
        </div>
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
