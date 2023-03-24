import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { UserContext } from '../context/userContext';
import { useMutation } from 'react-query';
import { API, setAuthToken } from '../config/api';
import Swal from 'sweetalert2';

function ModalLogin() {

    let navigate = useNavigate()

    const [_, dispatch] = useContext(UserContext)

    const [form, setForm] = useState({
        username: '',
        password: ''
    })
    const { username, password } = form

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = useMutation( async (e) => {
        try {
            e.preventDefault()

            let config = {
                header: {
                  "Content-Type": "application/json",
                },
              };

            const response = await API.post('/login', form, config)

            console.log(response)
            Swal.fire({
                title: 'Success!',
                text: 'Registrasi berhasil',
                icon: 'success',
                confirmButtonText: 'Kembali'
            })

            // Send data to useContext
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: response.data.Data,
            });

            setAuthToken(localStorage.Token);
            navigate("/")

            handleClose()
        }catch (e){
            Swal.fire({
                title: 'Error!',
                text: 'Registrasi gagal',
                icon: 'error',
                confirmButtonText: 'Kembali'
            })
            // console.log("login failed: " + e)
        }
        
    })

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Link onClick={handleShow} className='nav-link'>
                <span className='nav-text-login'>Sign in</span>
            </Link>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body className='p-4'>
                    <h4 className='nav-text-bold my-3 text-center'>Sign in</h4>
                    <Form onSubmit={(e) => handleSubmit.mutate(e)}>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label className='nav-text-bold'>Username</Form.Label>
                            <Form.Control name="username" type="text" value={username} onChange={handleChange} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='nav-text-bold'>Password</Form.Label>
                            <Form.Control name="password" type="password" value={password} onChange={handleChange} required/>
                        </Form.Group>
                        <Button variant="primary" type="submit" className='all-btn-submit'>
                            Sign in
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalLogin;