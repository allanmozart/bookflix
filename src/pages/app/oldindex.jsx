import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import Login from "../login";
import "./styles.css";
import { DefaultButton } from "../../components/buttons/style";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar className="navbar" collapseOnSelect expand="lg">
      <Navbar.Brand>
        <Link to="/">
          <img
            className="logo"
            src="https://fontmeme.com/permalink/231005/1bf0ab08da7c21a3ed063a6277666c66.png"
            alt="Bookflix Logo"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="buttonSingIn">
          <DefaultButton to="/login" color='green'>Sign In</DefaultButton>
          <DefaultButton to="/login" >Sign In</DefaultButton>
        </Nav>
      </Navbar.Collapse>
      </Navbar>

      <Container className="mainContainer">
        <Row className="mainContentRow">
          <h1>Unlimited books, articles, and more</h1>
          <p>Read anywhere. Cancel anytime.</p>
          <p className="pSubscribe">
            Ready to read? Enter your email to create or restart your
            membership.
          </p>
        </Row>
      </Container>
      <Container className="mainContentRowform">
        <Row>
          <Col className="formCol" xs={1} md={4} lg={7}>
            <input
              className="inputEmail"
              type="email"
              placeholder="Email address"
            />
          </Col>
          <Col className="formCol">
            <Link className="button" to="/">
              Get Started
            </Link>
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
