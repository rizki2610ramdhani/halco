import { Container, Card, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'

export default function Consultation() {
    return (
        <Container>
            <h2 className='text-bold text-color-pink mt-5'>Consultation</h2>
            <Link to="/consultation-form" className="d-flex justify-content-end" style={{textDecoration:"none"}}>
                <button className="bg-color-pink p-2 text-bold" style={{border:"none", color:"white", borderRadius:"10px"}}>
                    Request New Consultation
                </button>
            </Link>
            <Card style={{ boxShadow: "0 0 5px gray" }} className='my-3'>
                <Card.Body className='m-4'>
                    <Row>
                        <Col md={1}>
                            <img src={process.env.PUBLIC_URL + "images/nav/jokowi.jpg"} className='nav-profile-image' alt="profile" />
                        </Col>
                        <Col md={11}>
                            <Row>
                                <Col md={10}>
                                    <h5 className="text-bold">Sakit kepala berlebih</h5>
                                    <span>16 April 2020</span>
                                </Col>
                                <Col md={2}>
                                    <p className="text-end" style={{ fontSize: "15px" }}>17 Mei 2020</p>
                                </Col>
                                <p className="text-gray">
                                    Keluhan : Dok kenapa ya disetiap malam kepala saya suka sakit kepa berlebih terlebih lagi kalau  tidak mempunyai uang
                                </p>
                            </Row>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="mx-5">

                        <h4 className="text-center text-gray text-bold">Waiting for reply</h4>
                    </Row>
                </Card.Body>
            </Card>
            <Card style={{ boxShadow: "0 0 5px gray" }} className='my-3'>
                <Card.Body className='m-4'>
                    <Row>
                        <Col md={1}>
                            <img src={process.env.PUBLIC_URL + "images/nav/jokowi.jpg"} className='nav-profile-image' alt="profile" />
                        </Col>
                        <Col md={11}>
                            <Row>
                                <Col md={10}>
                                    <h5 className="text-bold">Sakit kepala berlebih</h5>
                                    <span>16 April 2020</span>
                                </Col>
                                <Col md={2}>
                                    <p className="text-end" style={{ fontSize: "15px" }}>17 Mei 2020</p>
                                </Col>
                                <p className="text-gray">
                                    Keluhan : Dok kenapa ya disetiap malam kepala saya suka sakit kepa berlebih terlebih lagi kalau  tidak mempunyai uang
                                </p>
                            </Row>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="mx-5">
                        <Col md={1}>
                            <img src={process.env.PUBLIC_URL + "images/nav/jokowi.jpg"} className='nav-profile-image' alt="profile" />
                        </Col>
                        <Col md={11}>
                            <p className="text-gray">
                                Hi Radif hari ini adalah jadwal konsultasi kamu, silahkan klik link berikut untuk melakukan konsultasi secara
                                langsung kepada saya :
                            </p>
                            <p className="text-gray">Dr. Muhammad Rizki </p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}