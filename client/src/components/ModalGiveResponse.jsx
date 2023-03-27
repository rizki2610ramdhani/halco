import { useState } from "react";
import { Modal, Row, Col, Form, Table, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { API } from "../config/api";
import Swal from "sweetalert2";
import { useMutation } from "react-query";

export default function ModalGiveResponse({ item }) {

    let navigate = useNavigate()

    const [form, setForm] = useState({
        responseText: '',
        consultationLink: '',
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = useMutation(async (e) => {
        try {
            e.preventDefault()

            // Store data with FormData as object
            const formData = new FormData()
            formData.set('responseText', form.responseText)
            formData.set('consultationLink', form.consultationLink)

            const res = await API.post('/response/' + item.ID, formData)
            const cons = await API.patch('/consultation/' + item.ID)
            Swal.fire({
                title: 'Success!',
                text: 'Response berhasil dibuat',
                icon: 'success',
                confirmButtonText: 'Kembali'
            })
            setShow(false)

            navigate('/reservasi-data')
        } catch (e) {
            console.log("add Response failed : ", e);
            Swal.fire({
                title: 'Error!',
                text: 'Response gagal dibuat',
                icon: 'error',
                confirmButtonText: 'Kembali'
            })
        }
    })

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
                            <h5 className="text-bold">{item.Subject}</h5>
                            {item.Description}
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
                                <td>{item.User.FullName}</td>
                                <td>{item.User.Gender}</td>
                                <td>{item.User.Phone}</td>
                                <td>{item.Age} tahun</td>
                                <td>{item.Height} cm</td>
                                <td>{item.Weight} kg</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Form className="mt-3" onSubmit={(e) => handleSubmit.mutate(e)}>
                        <Form.Group className="mb-3" controlId="formBasicGiveResponse">
                            <Form.Label className="text-bold">Give Response</Form.Label>
                            <Form.Control
                                as="textarea"
                                style={{ height: '100px' }}
                                className="bg-input-form"
                                name="responseText"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Row>
                            <Col md={9}>
                                <Form.Group className="mb-3" controlId="formBasicLink">
                                    <Form.Control type="text" className="bg-input-form" name="consultationLink" onChange={handleChange} placeholder="Paste Your Meet Conversation Link Here..." />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <div className="d-flex justify-content-center" style={{ textDecoration: "none" }}>
                                    <Button type="submit" className="text-bold" style={{ border: "none", color: "white", borderRadius: "10px", padding: "8px 65px", backgroundColor: "#0ACF83" }}>
                                        Accept
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
        </>

    )
}