import React from 'react'
import {Navbar,NavDropdown,Container,Nav, NavbarBrand} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const NavbarLg = () => {
    return (<>
        <div className="flex flex-row  text-xl">
            <div className=" bg-verdant-green text-mellow-yellow w-1/2 p-4 text-2xl">Covid Updates</div>
            <div className="flex flex-row justify-around w-full py-4">
                <Link to="/" className="focus:text-mellow-yellow hover:text-mellow-yellow
                hover:underline">
                <h1>Home</h1>
                </Link>
                <h1>About Me</h1>
                <Link to="/projects" className="focus:text-mellow-yellow hover:text-mellow-yellow
                hover:underline active:text-mellow-yellow">
                <h1>Projects</h1>
                </Link>
                <h1>Contact Me</h1>
            </div>
        </div>
    </>)
};
const NavbarSm = () => {
    return (
        <>
        <Navbar variant="dark" bg="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#home">Covid Updates</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-dark-example" />
    <Navbar.Collapse id="navbar-dark-example" >
      <Nav>
          <NavDropdown.Item href="#action/3.1" className="text-white hover:bg-blue-300 hover:text-black">Home</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2"className="text-white hover:bg-blue-300 hover:text-black">About Me</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3"className="text-white hover:bg-blue-300 hover:text-black">Projects</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3"className="text-white hover:bg-blue-300 hover:text-black">Contact Me</NavDropdown.Item>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}

export default function NavbarMain() {
    return (
        <>
        <div className="sm:block md:hidden lg:hidden"><NavbarSm></NavbarSm></div>
        <div className="lg:block sm:hidden"><NavbarLg></NavbarLg></div>
        </>
    )
}
