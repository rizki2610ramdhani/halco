import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useQuery } from 'react-query'
import { API } from '../config/api'
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import Swal from 'sweetalert2'


export default function MyArticle() {

    const [state] = useContext(UserContext)
    let id = state.user.ID

    let { data: articles, refetch } = useQuery('articlesCache', async () => {
        const response = await API.get('/articles/' + id);
        return response.data.Data;
    });

    async function deleteArticle(deleteId) {
        try {
            const _ = await API.delete('/article/' + deleteId);
            Swal.fire({
                title: 'Success!',
                text: 'Article berhasil dihapus',
                icon: 'success',
                confirmButtonText: 'Kembali'
            })
            refetch()
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Article gagal dihapus',
                icon: 'Error',
                confirmButtonText: 'Kembali'
            })
        }
    }

    return (
        <Container>
            <h2 className='text-bold text-color-pink mt-5'>My Article</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th style={{ width: "150px" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {articles?.length !== 0 &&
                        articles?.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.Title}</td>
                                <td>
                                    <div className="dropdown">
                                        <span className="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src={process.env.PUBLIC_URL + "/images/searc.png"} alt="search" style={{ width: "20px" }} />
                                        </span>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link to={"/edit-article/" + item.ID} className="d-flex justify-content-center" style={{ textDecoration: "none" }}>
                                                    <button className="text-bold" style={{ border: "none", color: "white", borderRadius: "10px", padding: "4px", backgroundColor: "#0ACF83", margin: "2px" }}>
                                                        Edit Article
                                                    </button>
                                                </Link>
                                                <Link className="d-flex justify-content-center" style={{ textDecoration: "none" }}>
                                                    <button onClick={() => deleteArticle(item.ID)} className="text-bold" style={{ border: "none", color: "white", borderRadius: "10px", padding: "4px", backgroundColor: "#FF0742", margin: "2px" }}>
                                                        Delete Article
                                                    </button>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container >
    )
}