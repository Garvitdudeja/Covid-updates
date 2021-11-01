import React from 'react'
import {Navbar,NavDropdown,Container,Nav, NavbarBrand} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const NavbarLg = () => {
    return (<>
        <div className="flex flex-row  text-3xl">
            <div className=" bg-verdant-green text-mellow-yellow w-1/2 p-4 ">Covid Updates</div>
            <div className="flex flex-row justify-around w-full py-4 text-2xl">
                <Link to="/" className="focus:text-mellow-yellow hover:text-mellow-yellow
                hover:underline navbar-button">
                <h1>Home</h1>
                </Link>
                <h1>About Me</h1>
                <Link to="/projects" className="focus:text-mellow-yellow hover:text-mellow-yellow
                hover:underline navbar-button">
                <h1>Projects</h1>
                </Link>
                <Link to="/contactUs" className="focus:text-mellow-yellow hover:text-mellow-yellow
                hover:underline navbar-button">
                <h1>Contact Me</h1>
                </Link>
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
          <NavDropdown.Item href="/" className="text-white hover:bg-blue-300 hover:text-black">Home</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2"className="text-white hover:bg-blue-300 hover:text-black">About Me</NavDropdown.Item>
          <NavDropdown.Item href="/projects"className="text-white hover:bg-blue-300 hover:text-black">Projects</NavDropdown.Item>
          <Link to="/contactUs"><NavDropdown.Item href="#action/3.3"className="text-white hover:bg-blue-300 hover:text-black">Contact Me</NavDropdown.Item></Link>
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
