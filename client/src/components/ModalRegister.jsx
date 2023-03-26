import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useMutation } from 'react-query'
import { API } from '../config/api'
import Swal from 'sweetalert2'

function ModalRegister() {

    const [form, setForm] = useState({
        fullName: '',
        username: '',
        email: '',
        password: '',
        role: '',
        gender: '',
        phone: '',
        address: '',
    })

    const { fullName, username, email, password, role, gender, phone, address } = form

    const genderList = [
        {
            value: "",
            text: "-- Choose your gender --",
        },
        {
            value: "Male",
            text: "Male",
        },
        {
            value: "Female",
            text: "Female",
        },
    ];

    const roleList = [
        {
            value: "",
            text: "-- Choose your gender --",
        },
        {
            value: "Patient",
            text: "Patient",
        },
        {
            value: "Doctor",
            text: "Doctor",
        },
    ];

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = useMutation(async (e) => {
        try {
            e.preventDefault();

            const response = await API.post('/register', form)

            Swal.fire({
                title: 'Success!',
                text: 'Registrasi berhasil',
                icon: 'success',
                confirmButtonText: 'Kembali'
            })

            console.log("register success : ", response)

            setForm({
                fullName: '',
                username: '',
                email: '',
                password: '',
                role: '',
                gender: '',
                phone: '',
                address: '',
            })

            handleClose()
        } catch (e) {
            Swal.fire({
                title: 'Error!',
                text: 'Registrasi gagal',
                icon: 'error',
                confirmButtonText: 'Kembali'
            })

            console.log("register failed : ", e)
        }
    })

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Link onClick={handleShow} className='nav-link'>
                <span className='nav-text-register'>Sign up</span>
            </Link>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body className='p-4'>
                    <h4 className='nav-text-bold my-3 text-center'>Sign up</h4>
                    <Form onSubmit={(e) => handleSubmit.mutate(e)}>
                        <Form.Group className="mb-3" controlId="formBasicFullName">
                            <Form.Label className='nav-text-bold'>Full Name</Form.Label>
                            <Form.Control name="fullName" type="text" value={fullName} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label className='nav-text-bold'>Username</Form.Label>
                            <Form.Control name="username" type="text" value={username} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='nav-text-bold'>Email</Form.Label>
                            <Form.Control name="email" type="email" value={email} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='nav-text-bold'>Password</Form.Label>
                            <Form.Control name="password" type="password" min={6} value={password} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId='formBasicRole'>
                            <Form.Label className='nav-text-bold'>List As</Form.Label>
                            <Form.Select name="role" value={role} onChange={handleChange}>
                                {roleList.map((item) => (
                                    <option key={item.value} value={item.value}>
                                        {item.text}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId='formBasicGender'>
                            <Form.Label className='nav-text-bold'>Gender</Form.Label>
                            <Form.Select name="gender" value={gender} onChange={handleChange}>
                                {genderList.map((item) => (
                                    <option key={item.value} value={item.value}>
                                        {item.text}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId='formBasicPhone'>
                            <Form.Label className='nav-text-bold'>Phone</Form.Label>
                            <Form.Control name="phone" type='number' value={phone} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId='formBasicAddress'>
                            <Form.Label className='nav-text-bold'>Address</Form.Label>
                            <Form.Control
                                name="address"
                                as="textarea"
                                value={address}
                                onChange={handleChange}
                                required
                                style={{ height: '100px' }}
                            />
                        </Form.Group>
                        <Button type="submit" className='all-btn-submit'>
                            Sign up
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal >
        </>
    )
}

export default ModalRegister;