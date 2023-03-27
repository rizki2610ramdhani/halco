import { Container, Table } from "react-bootstrap";
import ModalGiveResponse from "../components/ModalGiveResponse";
import { useQuery } from "react-query";
import { API } from "../config/api";
import Swal from "sweetalert2";

export default function ReservasiData() {

    let { data: consultations, refetch } = useQuery('consultationsCache', async () => {
        const response = await API.get('/consultations');
        return response.data.Data;
    });

    async function rejectCons(id) {
        try {
            const _ = await API.patch('/consultation-reject/' + id);
            Swal.fire({
                title: 'Success!',
                text: 'Consultation berhasil direject',
                icon: 'success',
                confirmButtonText: 'Kembali'
            })
            refetch()
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Consultation gagal direject',
                icon: 'Error',
                confirmButtonText: 'Kembali'
            })
        }
    }

    return (
        <Container>
            <h2 className='text-bold text-color-pink mt-5'>Reservasi Data</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>User</th>
                        <th>Subject</th>
                        <th>Date of complaint</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {consultations?.length !== 0 &&
                        consultations?.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.User.FullName}</td>
                                <td>{item.Subject}</td>
                                <td>18 april 2022</td>
                                {
                                    item.Status === "waiting" ?
                                        <td style={{ color: "#F7941E" }}>Waiting Approve Consultation Live</td>
                                        :
                                        item.Status === "success" ?
                                            <td style={{ color: "#0ACF83" }}>Live Consultation Approved</td>
                                            :
                                            <td style={{ color: "#FF0742" }}>Cancle</td>

                                }
                                <td>
                                    <div className="dropdown">
                                        <span className="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src={process.env.PUBLIC_URL + "/images/searc.png"} alt="search" style={{ width: "20px" }} />
                                        </span>
                                        <ul className="dropdown-menu">
                                            {
                                                item.Status === "waiting" ?
                                                    <>
                                                        <li className="my-1">
                                                            <ModalGiveResponse item={item} />
                                                        </li>
                                                        <li className="my-1">
                                                            <div className="d-flex justify-content-center" style={{ textDecoration: "none" }}>
                                                                <button onClick={() => rejectCons(item.ID)} className="text-bold" style={{ border: "none", color: "white", borderRadius: "10px", padding: "4px", backgroundColor: "#FF0742" }}>
                                                                    Reject
                                                                </button>
                                                            </div>
                                                        </li>
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                            }
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    )
}