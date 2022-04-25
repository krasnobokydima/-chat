import React from 'react'
import { useConversations } from '../../contexts/ConversationProvider'
import Conversation from './Conversation'

export default function Conversations() {
  const { conversations, selectConversationIndex } = useConversations()

  return (
    <>
      <h2 className='conversations__title'>Chats</h2>
      <ul className="conversations__body">
        {conversations.map((conversation, index) => (
          <Conversation
            key={index}
            active={conversation.selected}
            selectConversationIndex={selectConversationIndex}
            conversation={conversation}
            index={index}
          />
        ))}
      </ul>
    </>
  )
}
