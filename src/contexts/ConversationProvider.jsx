import React, { useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useContacts } from './ContextProvider'

const ConversationContext = React.createContext();
 
export function useConversations () {
  return useContext(ConversationContext);
}

export function ConversationProvider({ children }) {
  const [conversations, setConversations] = useLocalStorage('conversations', []);
  const { contacts } = useContacts();

  function createConversations(recipiens) {
    setConversations((prevConversations) => [...prevConversations, { recipiens, message: [] }])
  }

  const formattedConversations = conversations.map(conversation => {
    const recipiens = conversation.recipiens
      .map(userId => contacts.find(contact => contact.id === userId))

    return {...conversation, recipiens};
  })

  return (
    <ConversationContext.Provider value={{ conversations, createConversations }}>
      {children}
    </ConversationContext.Provider>
  )
}
