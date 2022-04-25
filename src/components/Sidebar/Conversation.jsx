import React from 'react'

export default function Conversation({
  conversation,
  active,
  selectConversationIndex,
  index,
}) {
  return (
    <div
      className={`user ${active && "user--active"}`}
      onClick={() => selectConversationIndex(index)}
    >
      <div className='user__avatar icon icon--male'></div>
      <div className='user__info'>
        <div className='user__name'>
          {conversation.recipients.map(p => p.name).join(', ')}
        </div>
        <div className='user__lastMessage'></div>
        
      </div>
      <div className='user__data'>{'jun 22, 2022'}</div>
    </div>
  )
}
