import { Container, Form, Button } from "react-bootstrap";
import { useMutation } from "react-query";
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { API } from '../config/api'
import Swal from 'sweetalert2'
import { UserContext } from "../context/userContext";

export default function AddArticle() {

    const[state] = useContext(UserContext)
    
    let navigate = useNavigate()

    const [form, setForm] = useState({
        title: '',
        image: '',
        description: '',
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:
                e.target.type === 'file' ? e.target.files : e.target.value,
        });
    }

    const handleSubmit = useMutation(async (e) => {
        try {
            e.preventDefault()

            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            // Store data with FormData as object
            const formData = new FormData()
            formData.set('title', form.title)
            formData.set('image', form.image[0], form.image[0].name)
            formData.set('description', form.description)

            const _ = await API.post('/article/' + state.user.ID, formData, config)
            Swal.fire({
                title: 'Success!',
                text: 'Article berhasil ditambahkan',
                icon: 'success',
                confirmButtonText: 'Kembali'
            })

            navigate('/')
        } catch (e) {
            console.log("add article failed : ", e);
            Swal.fire({
                title: 'Error!',
                text: 'Article gagal ditambahkan',
                icon: 'error',
                confirmButtonText: 'Kembali'
            })
        }
    })

    return (
        <Container>
            <h2 className='text-bold text-color-pink mt-5'>Add Article</h2>
            <Form onSubmit={(e) => handleSubmit.mutate(e)} className="my-4">
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label className="text-bold">Title</Form.Label>
                    <Form.Control name="title" type="text" className="bg-input-form" onChange={handleChange} />
                </Form.Group>
                <div className="col-md-4">
                    <Form.Group className="mb-3" controlId="formBasicImage">
                        <Form.Label className="text-bold">Image Thumbnail</Form.Label>
                        <Form.Control name="image" type="file" className="bg-input-form" onChange={handleChange} />
                    </Form.Group>
                </div>
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
                <Button type="submit" className="bg-color-pink text-bold" style={{ border: "none", color: "white", borderRadius: "10px", padding: "8px 90px" }}>
                    Post
                </Button>
            </Form>
        </Container>
    )
}