import { Container, Card, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'

export default function Profile() {
    return (
        <Container>
            <Card className="mx-auto my-5" style={{ width: "60rem", boxShadow:"0 0 5px gray" }}>
                <Card.Body>
                    <Row>
                        <Col md={8}>
                            <h5 className="text-bold mb-2">Personal Info</h5>
                            <Row className="my-3">
                                <Col md={1}>
                                    <img src={process.env.PUBLIC_URL + "/images/iconprov.png"} alt="profile" style={{width:"170%"}} />
                                </Col>
                                <Col md={11} className="ps-4">
                                    <span className="text-bold">Radif Ganteng</span>
                                    <br />
                                    <span className="text-gray">Full Name</span>
                                </Col>
                            </Row>
                            <Row className="my-3">
                                <Col md={1}>
                                    <img src={process.env.PUBLIC_URL + "/images/email.png"} alt="profile" style={{width:"170%"}} />
                                </Col>
                                <Col md={11} className="ps-4">
                                    <span className="text-bold">radifgans@gmail.com</span>
                                    <br />
                                    <span className="text-gray">Email</span>
                                </Col>
                            </Row>
                            <Row className="my-3">
                                <Col md={1}>
                                    <img src={process.env.PUBLIC_URL + "/images/status.png"} alt="profile" style={{width:"170%"}} />
                                </Col>
                                <Col md={11} className="ps-4">
                                    <span className="text-bold">Patien</span>
                                    <br />
                                    <span className="text-gray">Status</span>
                                </Col>
                            </Row>
                            <Row className="my-3">
                                <Col md={1}>
                                    <img src={process.env.PUBLIC_URL + "/images/gender.png"} alt="profile" style={{width:"170%"}} />
                                </Col>
                                <Col md={11} className="ps-4">
                                    <span className="text-bold">Male</span>
                                    <br />
                                    <span className="text-gray">Gender</span>
                                </Col>
                            </Row>
                            <Row className="my-3">
                                <Col md={1}>
                                    <img src={process.env.PUBLIC_URL + "/images/phone.png"} alt="profile" style={{width:"150%"}} />
                                </Col>
                                <Col md={11} className="ps-4">
                                    <span className="text-bold">089564736456</span>
                                    <br />
                                    <span className="text-gray">Phone</span>
                                </Col>
                            </Row>
                            <Row className="my-3">
                                <Col md={1}>
                                    <img src={process.env.PUBLIC_URL + "/images/place.png"} alt="profile" style={{width:"170%"}} />
                                </Col>
                                <Col md={11} className="ps-4">
                                    <span className="text-bold">Perumahan Permata Bintaro Residence C-3</span>
                                    <br />
                                    <span className="text-gray">Address</span>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4}>
                            <img src={process.env.PUBLIC_URL + "/images/nav/jokowi.jpg"} alt="profile" className='img-fluid mb-2' style={{borderRadius:"10px"}} />
                            <Link style={{ textDecoration: "none", color: "white" }}>
                                <div className='all-btn-submit py-2 text-center' style={{ borderRadius: "10px" }}>
                                    Change Photo Profile
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}