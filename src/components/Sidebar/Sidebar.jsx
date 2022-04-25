import React, { useState } from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";

import Conversations from "./Conversations";
// import Contacts from "./Contacts";
import NewConversationModal from "./NewConversationModal";
import NewPersonModal from "./NewPersonModal";
import SidebarHeader from "./SidebarHeader";

import './Sidebar.scss';



// const CONVERSATION_KEY = 'Conversation';
// const CONTACTS_KEY = 'Contact';

export function Sidebar( { id }) {
  // const [activeKey, setActiveKey] = useState(CONVERSATION_KEY)
  const [modalOpen, setModalOpen] = useState(false)
  const [conversationIsOpen, setConversationsIsOpen] = useState(false);

  const modalClose = () => {
    setModalOpen(false)
  }

	return (
    <div  className="sidebar">
      <SidebarHeader id={id} />
      
      <Conversations className="conversations"/>
      
      <Modal show={modalOpen} onHide={modalClose}>
        {conversationIsOpen
          ? <NewConversationModal modalClose={modalClose} />
          : <NewPersonModal modalClose={modalClose} />
        }
      </Modal>

      <div>
        <Button
          className="rounded-0"
          onClick={() => setModalOpen(true)}
        >
          {`New ${conversationIsOpen ? 'Conversation' : 'Contact'}`}
        </Button>
        <Button onClick={() => setConversationsIsOpen(!conversationIsOpen)}>
          toggle
        </Button>
      </div>
      
    </div>
  );
}


//<Tab.Container
// activeKey={activeKey}
// onSelect={setActiveKey}
// >
// <Nav variant="tabs" className="justify-content-center" style={{cursor: 'pointer'}}>  
//   <Nav.Item>
//     <Nav.Link eventKey={CONVERSATION_KEY}>Conversations</Nav.Link>
//   </Nav.Item>
//   <Nav.Item>
//     <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
//   </Nav.Item>
// </Nav>
// <Tab.Content
//   className="flex-grow-1 overflow-auto border border-top-0"
// >
//   <Tab.Pane eventKey={CONVERSATION_KEY} >
//     <Conversations/>
//   </Tab.Pane>
//   <Tab.Pane eventKey={CONTACTS_KEY} >
//     <Contacts />
//   </Tab.Pane>
// </Tab.Content>
// <div className="p-2 border border-top-0">
//   Your ID: <span>{id}</span>
// </div>

// </Tab.Container>
