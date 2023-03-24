import { Container, Form } from "react-bootstrap";
import { Link } from 'react-router-dom'

export default function AddArticle() {
    return (
        <Container>
            <h2 className='text-bold text-color-pink mt-5'>Add Article</h2>
            <Form className="my-4">
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label className="text-bold">Title</Form.Label>
                    <Form.Control type="text" className="bg-input-form" />
                </Form.Group>
                <div className="col-md-4">
                    <Form.Group className="mb-3" controlId="formBasicImage">
                        <Form.Label className="text-bold">Image Thumbnail</Form.Label>
                        <Form.Control type="file" className="bg-input-form" />
                    </Form.Group>
                </div>
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
                        Post
                    </button>
                </Link>
            </Form>
        </Container>
    )
}