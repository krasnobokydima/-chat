import React from "react";
import { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";

export default function Login({ onIdSubmit }) {
	const idRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();

		onIdSubmit(idRef.current.value);
	};

	const createNewId = () => {
		onIdSubmit(uuidV4());
	};

	return (
		<Container className="align-items-center d-flex" style={{ height: "100vh" }}>
			<Form className="w-100" onSubmit={handleSubmit}>
				<Form.Group className="mb-4">
					<Form.Label>Enter ID</Form.Label>
					<Form.Control type="text" ref={idRef} required></Form.Control>
				</Form.Group>
				<div className="d-grid gap-2 d-sm-flex justify-content-sm-start mb-5">
					<Button type="submit">Login</Button>
					<Button variant="secondary" onClick={createNewId}>
						Create new id
					</Button>
				</div>
			</Form>
		</Container>
	);
}
