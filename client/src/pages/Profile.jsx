import { useContext } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { UserContext } from "../context/userContext";

export default function Profile() {

    const [state] = useContext(UserContext)

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
                                    <span className="text-bold">{state.user.FullName}</span>
                                    <br />
                                    <span className="text-gray">Full Name</span>
                                </Col>
                            </Row>
                            <Row className="my-3">
                                <Col md={1}>
                                    <img src={process.env.PUBLIC_URL + "/images/email.png"} alt="profile" style={{width:"170%"}} />
                                </Col>
                                <Col md={11} className="ps-4">
                                    <span className="text-bold">{state.user.Email}</span>
                                    <br />
                                    <span className="text-gray">Email</span>
                                </Col>
                            </Row>
                            <Row className="my-3">
                                <Col md={1}>
                                    <img src={process.env.PUBLIC_URL + "/images/status.png"} alt="profile" style={{width:"170%"}} />
                                </Col>
                                <Col md={11} className="ps-4">
                                    <span className="text-bold">{state.user.Role}</span>
                                    <br />
                                    <span className="text-gray">Status</span>
                                </Col>
                            </Row>
                            <Row className="my-3">
                                <Col md={1}>
                                    <img src={process.env.PUBLIC_URL + "/images/gender.png"} alt="profile" style={{width:"170%"}} />
                                </Col>
                                <Col md={11} className="ps-4">
                                    <span className="text-bold">{state.user.Gender}</span>
                                    <br />
                                    <span className="text-gray">Gender</span>
                                </Col>
                            </Row>
                            <Row className="my-3">
                                <Col md={1}>
                                    <img src={process.env.PUBLIC_URL + "/images/phone.png"} alt="profile" style={{width:"150%"}} />
                                </Col>
                                <Col md={11} className="ps-4">
                                    <span className="text-bold">{state.user.Phone}</span>
                                    <br />
                                    <span className="text-gray">Phone</span>
                                </Col>
                            </Row>
                            <Row className="my-3">
                                <Col md={1}>
                                    <img src={process.env.PUBLIC_URL + "/images/place.png"} alt="profile" style={{width:"170%"}} />
                                </Col>
                                <Col md={11} className="ps-4">
                                    <span className="text-bold">{state.user.Address}</span>
                                    <br />
                                    <span className="text-gray">Address</span>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4} className="text-center">
                            <img src={state.user.Photo} alt="profile" className='img-fluid mb-2' style={{borderRadius:"10px"}} />
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