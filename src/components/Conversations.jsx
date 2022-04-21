import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useConversations } from '../contexts/ConversationProvider'

export default function Conversations() {
  const { conversations } = useConversations()
 
  return (
    <ListGroup variant="flush">
      {conversations.map((conversation, index) => (
        <ListGroup.Item
          key={index}
          action
          // active={.selected}
          // onClick={handleConversation}
        >
        {conversation.recipiens.map(p => p.name).join(', ')}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
