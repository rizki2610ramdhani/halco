import { Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query';
import { API } from '../config/api';

export default function Home() {

    let { data: articles } = useQuery('articlesCache', async () => {
        const response = await API.get('/articles');
        return response.data.Data;
    });
   
    return (
        <>
            <img src={process.env.PUBLIC_URL + "/images/Jumbotron.png"} alt="jumbotron" className='img-fluid' />
            <h2 className="text-color-pink text-bold py-5 text-center">Artikel Kesehatan</h2>
            <Row>
                {articles?.length !== 0 &&
                    articles?.map((item, index) => (
                        <Col md={3} sm={6} xs={12} key={index}>
                            <Link to={"/article/" + item.ID} style={{ textDecoration: "none" }}>
                                <Card style={{ boxShadow: "0 0 5px gray" }} className='mx-auto my-2'>
                                    <Card.Img variant="top" src={item.Attache} />
                                    <Card.Body>
                                        <Card.Title style={{ color: "black" }}>{item.Title}</Card.Title>
                                        <Card.Text style={{ color: "gray" }}>
                                            {item.Description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}