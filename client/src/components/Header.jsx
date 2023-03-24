import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ModalLogin from './ModalLogin'
import ModalRegister from './ModalRegister'
export default function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to="" className="navbar-brand" href="#home">
                    <img src={process.env.PUBLIC_URL + "/images/nav/logo.png"} className='nav-logo' alt="logo" />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <ModalRegister />
                        <ModalLogin />
                        <div className="dropdown">
                            <span className="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={process.env.PUBLIC_URL + "images/nav/newpro.png"} className='nav-profile-image' alt="profile" />
                            </span>
                            <ul className="dropdown-menu">
                                <li><Link to='/profile' className="dropdown-item"><img alt='icon' src={process.env.PUBLIC_URL + "images/nav/user.png"} className="nav-dropdown-img" /> Profile</Link></li>
                                <li><Link to="/consultation" className="dropdown-item"><img alt='icon' src={process.env.PUBLIC_URL + "images/nav/consul.png"} className="nav-dropdown-img" /> Consultation</Link></li>
                                <li><Link to="/add-article" className="dropdown-item"><img alt='icon' src={process.env.PUBLIC_URL + "images/nav/article.png"} className="nav-dropdown-img" /> Add Article</Link></li>
                                <li><Link to="/" className="dropdown-item"><img alt='icon' src={process.env.PUBLIC_URL + "images/nav/logout.png"} className="nav-dropdown-img" /> Logout</Link></li>
                            </ul>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}