import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useConversations } from '../contexts/ConversationProvider'

export default function Conversations() {
  const { conversations } = useConversations()

  console.log(conversations)
 
  return (
    <ListGroup variant="flush">
      {conversations.map(conversation => (
        <ListGroup.Item>
          1
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
