import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

const Navigation = () =>{
  return (
    <>
    <Container fluid>
                <Row>
                    <Col className="col-10 mx-auto" >
                    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">Traveloholic</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About Us</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
                    </Col>
                </Row>
             </Container>

    
    </>
  )
}

export default Navigation;