import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import Home from '../home';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/home">My Web Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container>
        <Row>
          <Col>
            <Routes>
              <Route path="/home" element={<Home />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
};
export default App;
