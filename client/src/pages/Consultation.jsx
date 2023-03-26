import { Container, Card, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { useQuery } from "react-query";
import { API } from "../config/api";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function Consultation() {

    const [state] = useContext(UserContext)

    let id = state.user.ID

    console.log(id)


    let { data: consultations } = useQuery('consultationsCache', async () => {
        const response = await API.get('/consultations/' + id);
        return response.data.Data;
    });

    return (
        <Container>
            <h2 className='text-bold text-color-pink mt-5'>Consultation</h2>
            <Link to="/consultation-form" className="d-flex justify-content-end" style={{ textDecoration: "none" }}>
                <button className="bg-color-pink p-2 text-bold" style={{ border: "none", color: "white", borderRadius: "10px" }}>
                    Request New Consultation
                </button>
            </Link>
            {consultations?.length !== 0 &&
                consultations?.map((item, index) => (
                    <Card style={{ boxShadow: "0 0 5px gray" }} className='my-3' key={index}>
                        <Card.Body className='m-4'>
                            <Row>
                                <Col md={1}>
                                    <img src={state.user.Photo} className='nav-profile-image' alt="profile" />
                                </Col>
                                <Col md={11}>
                                    <Row>
                                        <Col md={10}>
                                            <h5 className="text-bold">{item.Subject}</h5>
                                            <span>16 April 2020</span>
                                        </Col>
                                        <Col md={2}>
                                            <p className="text-end" style={{ fontSize: "15px" }}>17 Mei 2020</p>
                                        </Col>
                                        <p className="text-gray">
                                            Keluhan : {item.Description}
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
                ))
            }
        </Container>
    )
}