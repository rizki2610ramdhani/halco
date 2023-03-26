import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import ModalLogin from './ModalLogin'
import ModalRegister from './ModalRegister'
import { useContext } from 'react'
import { UserContext } from '../context/userContext'
import Swal from 'sweetalert2'

export default function Header() {

    let navigate = useNavigate()

    const [state] = useContext(UserContext)
    const [_, dispatch] = useContext(UserContext)

    const logout = () => {
        Swal.fire({
            title: 'Anda ingin keluar?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: "LOGOUT"
                })
                Swal.fire(
                    'Success!',
                    'Anda berhasil logout.',
                    'success'
                )
                navigate('/')

            }
        })
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to="" className="navbar-brand" href="#home">
                    <img src={process.env.PUBLIC_URL + "/images/nav/logo.png"} className='nav-logo' alt="logo" />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {state.isLogin ?
                            <>
                                <div className="dropdown">
                                    <span className="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={process.env.PUBLIC_URL + "images/nav/newpro.png"} className='nav-profile-image' alt="profile" />
                                    </span>
                                    <ul className="dropdown-menu">
                                        <li><Link to='/profile' className="dropdown-item"><img alt='icon' src={process.env.PUBLIC_URL + "images/nav/user.png"} className="nav-dropdown-img" /> Profile</Link></li>
                                        {state.user.Role === "Doctor" ?
                                            <>
                                                <li><Link to="/add-article" className="dropdown-item"><img alt='icon' src={process.env.PUBLIC_URL + "images/nav/article.png"} className="nav-dropdown-img" /> Add Article</Link></li>
                                                <li><Link to="/my-articles" className="dropdown-item"><img alt='icon' src={process.env.PUBLIC_URL + "images/nav/article.png"} className="nav-dropdown-img" /> My Article</Link></li>
                                                <li><Link to="/reservasi-data" className="dropdown-item"><img alt='icon' src={process.env.PUBLIC_URL + "images/nav/article.png"} className="nav-dropdown-img" /> Reservasi Data</Link></li>
                                            </>
                                            :
                                            <li><Link to="/consultation" className="dropdown-item"><img alt='icon' src={process.env.PUBLIC_URL + "images/nav/consul.png"} className="nav-dropdown-img" /> Consultation</Link></li>
                                        }
                                        <li><Link onClick={logout} className="dropdown-item"><img alt='icon' src={process.env.PUBLIC_URL + "images/nav/logout.png"} className="nav-dropdown-img" /> Logout</Link></li>
                                    </ul>
                                </div>
                            </>
                            :
                            <>
                                <ModalRegister />
                                <ModalLogin />
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}