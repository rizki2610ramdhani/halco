import { Container, Form, Button } from "react-bootstrap";
import { useMutation } from "react-query";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import { API } from '../config/api'
import Swal from 'sweetalert2'

export default function EditArticle() {

    let navigate = useNavigate();

    //get product id
    let { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [preview, setPreview] = useState(null); //For image preview
    const [form, setForm] = useState({
        title: '',
        image: '',
        description: '',
    }); //Store product data

    async function getDataUpdate() {
        const response = await API.get('/article/' + id);
        setPreview(response.data.Data.Attache);
        setForm({
            ...form,
            title: response.data.Data.Title,
            description: response.data.Data.Description,
        });
        setIsLoading(false)
    }

    useEffect(() => {
        getDataUpdate()
    }, []);

    // Handle change data on form
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:
                e.target.type === 'file' ? e.target.files : e.target.value,
        });

        // Create image url for preview
        if (e.target.type === 'file') {
            let url = URL.createObjectURL(e.target.files[0]);
            setPreview(url);
        }
    };

    const handleSubmit = useMutation(async (e) => {
        try {
            e.preventDefault();

            // Configuration
            const config = {
                headers: {
                    'Content-type': 'multipart/form-data',
                },
            };

            // Store data with FormData as object
            const formData = new FormData();
            if (form.image) {
                formData.set('image', form?.image[0], form?.image[0]?.name);
            }
            formData.set('title', form.title);
            formData.set('description', form.description);

            const _ = await API.patch(
                '/article/' + id,
                formData,
                config
            );
            Swal.fire({
                title: 'Success!',
                text: 'Article berhasil diedit',
                icon: 'success',
                confirmButtonText: 'Kembali'
            })
            navigate(`/article/${id}`)
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Article gagal diedit',
                icon: 'error',
                confirmButtonText: 'Kembali'
            })
            console.log(error);
        }
    });

    return (
        <Container>
            <h2 className='text-bold text-color-pink mt-5'>Add Article</h2>
            <Form onSubmit={(e) => handleSubmit.mutate(e)} className="my-4">
                {preview && (
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <img src={preview} alt="image" className='img-fluid my-3'/>
                    </Form.Group>
                )}

                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label className="text-bold">Title</Form.Label>
                    <Form.Control name="title" type="text" className="bg-input-form" onChange={handleChange} value={form?.title} />
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
                        value={form?.description}

                    />
                </Form.Group>
                <Button type="submit" className="bg-color-pink text-bold" style={{ border: "none", color: "white", borderRadius: "10px", padding: "8px 90px" }}>
                    Post
                </Button>
            </Form>
        </Container>
    )
}