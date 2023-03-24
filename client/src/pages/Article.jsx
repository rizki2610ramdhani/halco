import { Container, Card } from 'react-bootstrap'

export default function Article() {
    return (
        <Container>
            <h3 className='text-bold mt-5'>Ini Alasan Buah dan Sayur dari Supermarket Harus Dicuci</h3>
            <span className='text-gray'>17 April 2021</span>
            <p className='text-gray'>Author: <span className='text-color-pink'>Dr. Rizki Ramdhani</span></p>
            <Card style={{boxShadow:"0 0 10px gray"}} className='mb-5'>
                <div className='m-5'>
                    <div style={{width:"80%"}} className='mx-auto'>
                    <Card.Img variant="top" className="img-fluid" src={process.env.PUBLIC_URL + "/images/imgt1.png"} />
                    </div>
                    <Card.Body className='mt-4'>
                            <p>
                            Hallo Corona, Jakarta - Dengan adanya wabah yang menyerang, banyak orang diharuskan untuk tetap tinggal di rumah. Namun, setiap orang diperbolehkan untuk keluar rumah hanya untuk belanja bahan makanan di supermarket atau pasar. Banyak orang yang lebih memperhatikan kebersihan tangannya, tetapi bagaimana dengan virus yang menempel pada makanan, termasuk sayur dan buah?
                            </p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias dolores voluptatum animi explicabo nobis, magni autem vero ut quam nihil laborum consequuntur dicta assumenda sunt quae nostrum deserunt eos corporis! Explicabo nihil possimus vel, dolore maiores illum, atque saepe natus temporibus quam aut, quisquam nisi. Ratione mollitia molestiae soluta dolores unde voluptas rerum quaerat saepe, fugit, ex magnam porro corrupti magni labore, ipsam recusandae nihil aut qui natus voluptatum! Incidunt minus, quam aliquam id nemo temporibus maiores omnis voluptatem ad?
                            </p>
                    </Card.Body>
                </div>
            </Card>
        </Container>
    )
}