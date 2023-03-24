import { useState } from "react";
import { Modal, Row, Col, Form, Table } from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function ModalGiveResponse() {
    const [show, setShow] = useState(false);
    return (
        <>
            <Link className="d-flex justify-content-center" style={{ textDecoration: "none" }}>
                <button onClick={() => setShow(true)} className="text-bold" style={{ border: "none", color: "white", borderRadius: "10px", padding: "4px", backgroundColor: "#0ACF83" }}>
                    Give Response
                </button>
            </Link>
            <Modal
                size="lg"
                show={show}
                onHide={() => setShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={8}>
                            <h5 className="text-bold">Sakit Kepala Cuy</h5>
                            Dok kenapa ya disetiap malam kepala saya suka sakit kepa berlebih terlebih lagi kalau  tidak mempunyai uang
                            lalu terkadang tenggorokan saya suka sakit gitu dok, dan masih banyak lagi yang lain nya dok
                            segera di response dok ya kapan kira-kira bisa konsultasinya
                        </Col>
                        <Col md={4}>
                            <div>
                                <span className="text-bold">
                                    <img src={process.env.PUBLIC_URL + "/images/calendar.png"} alt="calendar" style={{ width: "20px" }} /> Date of complaint
                                </span>
                                <br />
                                <span className="text-gray">16 Mei 2021</span>
                            </div>
                            <div className="mt-3">
                                <span className="text-bold">
                                    <img src={process.env.PUBLIC_URL + "/images/calendars.png"} alt="calendar" style={{ width: "20px" }} /> Live Consultation Request
                                </span>
                                <br />
                                <span className="text-gray">18 Mei 2021</span>
                            </div>
                        </Col>
                    </Row>
                    <Table responsive className="m-3">
                        <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>Gender</th>
                                <th>Phone</th>
                                <th>Age</th>
                                <th>Height</th>
                                <th>Weight</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>Male</td>
                                <td>089783928473</td>
                                <td>18 Tahun</td>
                                <td>170 cm</td>
                                <td>60 kg</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Form className="mt-3">
                        <Form.Group className="mb-3" controlId="formBasicGiveResponse">
                            <Form.Label className="text-bold">Give Response</Form.Label>
                            <Form.Control
                                as="textarea"
                                style={{ height: '100px' }}
                                className="bg-input-form"
                            />
                        </Form.Group>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="formBasicLink">
                                    <Form.Control type="text" className="bg-input-form" placeholder="Paste Your Meet Conversation Link Here..." />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Link className="d-flex justify-content-center" style={{ textDecoration: "none" }}>
                                    <button className="text-bold" style={{ border: "none", color: "white", borderRadius: "10px", padding: "8px 65px", backgroundColor: "#FF0742" }}>
                                        Reject
                                    </button>
                                </Link>
                            </Col>
                            <Col md={3}>
                                <Link className="d-flex justify-content-center" style={{ textDecoration: "none" }}>
                                    <button className="text-bold" style={{ border: "none", color: "white", borderRadius: "10px", padding: "8px 65px", backgroundColor: "#0ACF83" }}>
                                        Accept
                                    </button>
                                </Link>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
        </>

    )
}