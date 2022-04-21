import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Login from './Login';
import { Dashboard } from './Dashboard';
import { ContactProvider } from '../contexts/ContextProvider'
import { ConversationProvider } from '../contexts/ConversationProvider';

export const App = () => {
  const [personId, setPersonId] = useLocalStorage('id', 0)

  const dashboard = (
    <ContactProvider>
      <ConversationProvider>
        <Dashboard id={personId} setId={setPersonId} />
      </ConversationProvider>
    </ContactProvider>
  )

  return (
    personId ? dashboard : <Login onIdSubmit={setPersonId} />
  )
}
