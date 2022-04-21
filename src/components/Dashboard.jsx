import React from "react";
import { Button } from "react-bootstrap";
import OpenConversation from "./OpenConversation";
import { Sidebar } from "./Sidebar";
import { useConversations } from '../contexts/ConversationProvider';

export function Dashboard({ id, setId }) {
  const { selectedConversation } = useConversations();

	return (
    <div className="d-flex justify-content-between">
      <div style={{height: '100vh'}} className="d-flex">
        <Sidebar id={id} />
      </div>
      {selectedConversation && <OpenConversation />}
      <div>
        <Button onClick={() => {setId(0)}}>Remove</Button>
      </div>
    </div>
  );
}
