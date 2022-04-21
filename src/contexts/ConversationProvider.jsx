import React, { useContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useContacts } from './ContextProvider'

const ConversationContext = React.createContext();
 
export function useConversations() {
  return useContext(ConversationContext);
}

export function ConversationProvider({ children, personId }) {
  const [conversations, setConversations] = useLocalStorage('conversations', []);
  const [selectConversationIndex, setSelectConversationIndex] = useState(0)
  const { contacts } = useContacts();

  function createConversations(recipients) {
    setConversations((prevConversations) => [...prevConversations, { recipients, message: [], selected: false }])
  }


  const formattedConversations = conversations.map((conversation, index) => {
    const recipients = conversation.recipients.map(userId => contacts
      .find(contact => contact.id === userId) || userId)

    // const message = conversation.message.map(userId => contacts
    //   .find(contact => contact.id === userId) || userId)

      const selected = index === selectConversationIndex;

    return {...conversation, recipients, selected};
  })

  const addMessageToConversation = ({recipients, text, sender}) => {
    setConversations(prevConversations => {
      let madeChange = false;
      const newMessage = {sender, text}

      const newConversations = prevConversations
        .map(conversation => {
          if (arrayEquality(conversation.recipients, recipients)) {
            madeChange = true;

            return {
              ...conversation,
              message: [...conversation.message, newMessage],
            }
          }

          return conversation;
        })

      if (madeChange) {
        return newConversations
      } else {
        return [
          ...prevConversations, { recipients, message: [newMessage] },
        ]
      }
    })
  }

  const sendMessage = (recipients, text) => {
    addMessageToConversation({recipients, text, sender: personId})
  }

  const value = {
    conversations: formattedConversations,
    createConversations,
    selectConversationIndex: setSelectConversationIndex,
    selectedConversation: formattedConversations[selectConversationIndex],
    sendMessage,
  }

  return (
    <ConversationContext.Provider value={value}>
      {children}
    </ConversationContext.Provider>
  )
}

function arrayEquality(a, b) {
  if (a.length !== b.length) {
    return false
  }

  a.sort()
  b.sort()

  return a.every((elem, index) => (elem === b[index]))
}
