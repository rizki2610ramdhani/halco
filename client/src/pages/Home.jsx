import { Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <img src={process.env.PUBLIC_URL + "/images/Jumbotron.png"} alt="jumbotron" className='img-fluid'/>
            <h2 className="text-color-pink text-bold py-5 text-center">Artikel Kesehatan</h2>
            <Row>
                <Col md={3} sm={6} xs={12}>
                    <Link to="/article" style={{textDecoration:"none"}}>
                        <Card style={{ boxShadow:"0 0 5px gray" }} className='mx-auto my-2'>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/imgt1.png"} />
                            <Card.Body>
                                <Card.Title style={{color:"black"}}>Alasan Diffuser Antiseptik Sebaiknya Dihindari</Card.Title>
                                <Card.Text style={{color:"gray"}}>
                                WHO tengah menguji tiga vaksin potensial untuk diuji pada manusia. Ini ulasannya!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col md={3} sm={6} xs={12}>
                    <Link to="/article" style={{textDecoration:"none"}}>
                        <Card style={{ boxShadow:"0 0 5px gray" }} className='mx-auto my-2'>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/imgt1.png"} />
                            <Card.Body>
                                <Card.Title style={{color:"black"}}>Alasan Diffuser Antiseptik Sebaiknya Dihindari</Card.Title>
                                <Card.Text style={{color:"gray"}}>
                                WHO tengah menguji tiga vaksin potensial untuk diuji pada manusia. Ini ulasannya!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col md={3} sm={6} xs={12}>
                    <Link to="/article" style={{textDecoration:"none"}}>
                        <Card style={{ boxShadow:"0 0 5px gray" }} className='mx-auto my-2'>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/imgt1.png"} />
                            <Card.Body>
                                <Card.Title style={{color:"black"}}>Alasan Diffuser Antiseptik Sebaiknya Dihindari</Card.Title>
                                <Card.Text style={{color:"gray"}}>
                                WHO tengah menguji tiga vaksin potensial untuk diuji pada manusia. Ini ulasannya!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col md={3} sm={6} xs={12}>
                    <Link to="/article" style={{textDecoration:"none"}}>
                        <Card style={{ boxShadow:"0 0 5px gray" }} className='mx-auto my-2'>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/imgt1.png"} />
                            <Card.Body>
                                <Card.Title style={{color:"black"}}>Alasan Diffuser Antiseptik Sebaiknya Dihindari</Card.Title>
                                <Card.Text style={{color:"gray"}}>
                                WHO tengah menguji tiga vaksin potensial untuk diuji pada manusia. Ini ulasannya!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col md={3} sm={6} xs={12}>
                    <Link to="/article" style={{textDecoration:"none"}}>
                        <Card style={{ boxShadow:"0 0 5px gray" }} className='mx-auto my-2'>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/imgt1.png"} />
                            <Card.Body>
                                <Card.Title style={{color:"black"}}>Alasan Diffuser Antiseptik Sebaiknya Dihindari</Card.Title>
                                <Card.Text style={{color:"gray"}}>
                                WHO tengah menguji tiga vaksin potensial untuk diuji pada manusia. Ini ulasannya!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col md={3} sm={6} xs={12}>
                    <Link to="/article" style={{textDecoration:"none"}}>
                        <Card style={{ boxShadow:"0 0 5px gray" }} className='mx-auto my-2'>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/imgt1.png"} />
                            <Card.Body>
                                <Card.Title style={{color:"black"}}>Alasan Diffuser Antiseptik Sebaiknya Dihindari</Card.Title>
                                <Card.Text style={{color:"gray"}}>
                                WHO tengah menguji tiga vaksin potensial untuk diuji pada manusia. Ini ulasannya!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            </Row>
        </>
    )
}