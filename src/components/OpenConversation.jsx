import React, { useState } from 'react';
import { useConversations } from '../contexts/ConversationProvider';
import { Button } from 'react-bootstrap';
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
      <div className='open__container'>
      <div className='open__body'>
        {selectedConversation.messages.map((message, index) => {
          const { text, sender, fromMe } = message 
          return (
            <div
              key={index}
              className={`message ${fromMe ? 'message--fromMe' : ''}`}
              style={{width: 'max-content', maxWidth: '100%'}}
            >
              <div
                className={`
                  message__text
                  ${fromMe ? 'message__text--fromMe' : ''}
                `}
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
      <form onSubmit={handleSubmit}  className='open__footer'>
        <input
            className="open__input"
            required
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {/* <Button className="rounded-0" type="submit">Send</Button> */}
      </form>
    </div>
  )
}
