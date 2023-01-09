import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
            <Container>
                <Nav className='me-auto'>
                    <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
                    <Nav.Link to='/store' as={NavLink}>Store</Nav.Link>
                    <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
                </Nav>
                <Button className='rounded-circle' style={{ width: '3rem', height: "3rem", position: 'relative' }} variant="outline-primary">
                    <i className="ri-shopping-basket-fill"></i>
                    <div style={{
                        color: 'white',
                        width: '1.5rem',
                        height: '1.5rem',
                        position: 'absolute',
                        right: 0,
                        bottom: 0,
                        transform: 'translate(25%, 25%)'
                    }} className='rounded-circle bg-danger d-flex justify-content-center align-items-center'>3</div>
                </Button>
            </Container>
        </NavbarBs>
    )
}

export default Navbar
