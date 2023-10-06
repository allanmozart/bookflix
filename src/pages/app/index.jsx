import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
import Login from '../login';
import './styles.css'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand />
        <Link to="/">
          <img
            src="https://fontmeme.com/permalink/231005/1bf0ab08da7c21a3ed063a6277666c66.png"
            alt="Bookflix Logo"
          />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Button variant="danger">
              <Link className="button" to="/login">
                Sign In
              </Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container>
        <Row className="mainContentRow">
          <h1>Unlimited books, articles, and more</h1>
          <p>Read anywhere. Cancel anytime.</p>
          <p>
            Ready to read? Enter your email to create or restart your
            membership.
          </p>
        </Row>
        <Row>
          <Col>
            <input className="inputEmail" type="email" placeholder="Email address" />
          </Col>
          <Col>
            <Button variant="danger">
              <Link className="button" to="/">
                Get Started
              </Link>
            </Button>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <Routes>
              <Route path="/login" element={<Login />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
};
export default App;
