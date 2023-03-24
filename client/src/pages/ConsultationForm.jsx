import { Container, Form, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'

export default function ConsultationForm() {
    return (
        <Container>
            <h2 className='text-bold text-color-pink mt-5'>Reservasi Consultation</h2>
            <Form className="my-4">
                <Form.Group className="mb-3" controlId="formBasicFullName">
                    <Form.Label className="text-bold">Full Name</Form.Label>
                    <Form.Control type="text" className="bg-input-form" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label className="text-bold">Phone</Form.Label>
                    <Form.Control type="number" className="bg-input-form" />
                </Form.Group>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicBornDate" >
                            <Form.Label className="text-bold">Born Date</Form.Label>
                            <Form.Control type="date" className="bg-input-form" />
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                        <Form.Group className="mb-3" controlId="formBasicAge">
                            <Form.Label className="text-bold">Age</Form.Label>
                            <Form.Control type="number" className="bg-input-form" />
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                        <Form.Group className="mb-3" controlId="formBasicHeight">
                            <Form.Label className="text-bold">Height</Form.Label>
                            <Form.Control type="number" className="bg-input-form" />
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                        <Form.Group className="mb-3" controlId="formBasicWeight">
                            <Form.Label className="text-bold">Weight</Form.Label>
                            <Form.Control type="number" className="bg-input-form" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label className="text-bold">Gender</Form.Label>
                    <Form.Select className="bg-input-form">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSubject">
                    <Form.Label className="text-bold">Subject</Form.Label>
                    <Form.Control type="text" className="bg-input-form" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDate">
                    <Form.Label className="text-bold">Live Consultation Date</Form.Label>
                    <Form.Control type="date" className="bg-input-form" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label className="text-bold">Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        style={{ height: '100px' }}
                        className="bg-input-form"
                    />
                </Form.Group>
                <Link className="d-flex justify-content-center" style={{ textDecoration: "none" }}>
                    <button className="bg-color-pink text-bold" style={{ border: "none", color: "white", borderRadius: "10px", padding: "8px 90px" }}>
                        Send
                    </button>
                </Link>
            </Form>
        </Container>
    )
}