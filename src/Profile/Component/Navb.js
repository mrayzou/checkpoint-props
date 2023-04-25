import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navb() {
  return (
    <>
      
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">gameshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">News</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
       
       
    </>
  );
}

export default Navb;