import React from "react";
import { Button } from "react-bootstrap";
import OpenConversation from "./OpenConversation";
import { Sidebar } from "./Sidebar/Sidebar";
import { useConversations } from '../contexts/ConversationProvider';

export function Dashboard({ id, setId }) {
  const { selectedConversation } = useConversations();

	return (
    <div className="d-flex justify-content-between">
      <Sidebar id={id} />
      {selectedConversation && <OpenConversation />}
    </div>
  );
}
