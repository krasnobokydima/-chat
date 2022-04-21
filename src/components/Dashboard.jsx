import React from "react";
import { Button } from "react-bootstrap";
import { Sidebar } from "./Sidebar";

export function Dashboard({ id, setId }) {
	return (
    <div className="d-flex justify-content-between">
      <div style={{height: '100vh'}} className="d-flex">
        <Sidebar id={id} />
      </div>
      <div>
        <Button onClick={() => {setId(0)}}>Remove</Button>
      </div>
    </div>
  );
}
