import { Container, Form, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from "react";
import { API } from "../config/api";
import Swal from "sweetalert2";
import { useMutation } from "react-query";
import { UserContext } from "../context/userContext";

export default function ConsultationForm() {

    const [state] = useContext(UserContext)

    let navigate = useNavigate()

    const [form, setForm] = useState({
        bornDate: '',
        age: 0,
        height: 0,
        weight: 0,
        subject: '',
        requestDate: '',
        description: '',
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
            formData.set('bornDate', form.bornDate)
            formData.set('age', form.age)
            formData.set('height', form.height)
            formData.set('weight', form.weight)
            formData.set('subject', form.subject)
            formData.set('requestDate', form.requestDate)
            formData.set('description', form.description)

            const _ = await API.post('/consultation', formData)
            Swal.fire({
                title: 'Success!',
                text: 'Consultation berhasil dibuat',
                icon: 'success',
                confirmButtonText: 'Kembali'
            })

            navigate('/consultation')
        } catch (e) {
            console.log("add article failed : ", e);
            Swal.fire({
                title: 'Error!',
                text: 'Consultation gagal dibuat',
                icon: 'error',
                confirmButtonText: 'Kembali'
            })
        }
    })

    return (
        <Container>
            <h2 className='text-bold text-color-pink mt-5'>Reservasi Consultation</h2>
            <Form onSubmit={(e) => handleSubmit.mutate(e)} className="my-4">
                <Form.Group className="mb-3" controlId="formBasicFullName">
                    <Form.Label className="text-bold">Full Name</Form.Label>
                    <Form.Control type="text" className="bg-input-form" value={state.user.FullName} readOnly />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label className="text-bold">Phone</Form.Label>
                    <Form.Control type="number" className="bg-input-form" value={state.user.Phone} readOnly />
                </Form.Group>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicBornDate" >
                            <Form.Label className="text-bold">Born Date</Form.Label>
                            <Form.Control type="date" className="bg-input-form" name="bornDate" onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                        <Form.Group className="mb-3" controlId="formBasicAge">
                            <Form.Label className="text-bold">Age</Form.Label>
                            <Form.Control type="number" className="bg-input-form" name="age" onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                        <Form.Group className="mb-3" controlId="formBasicHeight">
                            <Form.Label className="text-bold">Height</Form.Label>
                            <Form.Control type="number" className="bg-input-form" name="height" onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                        <Form.Group className="mb-3" controlId="formBasicWeight">
                            <Form.Label className="text-bold">Weight</Form.Label>
                            <Form.Control type="number" className="bg-input-form" name="weight" onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label className="text-bold">Gender</Form.Label>
                    <Form.Control type="text" className="bg-input-form" value={state.user.Gender} readOnly />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSubject">
                    <Form.Label className="text-bold">Subject</Form.Label>
                    <Form.Control type="text" className="bg-input-form" name="subject" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDate">
                    <Form.Label className="text-bold">Live Consultation Date</Form.Label>
                    <Form.Control type="date" className="bg-input-form" name="requestDate" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label className="text-bold">Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        style={{ height: '100px' }}
                        className="bg-input-form"
                        name="description"
                        onChange={handleChange} 
                    />
                </Form.Group>
                <div className="d-flex justify-content-center" style={{ textDecoration: "none" }}>
                    <button type="submit" className="bg-color-pink text-bold" style={{ border: "none", color: "white", borderRadius: "10px", padding: "8px 90px" }}>
                        Send
                    </button>
                </div>
            </Form>
        </Container>
    )
}