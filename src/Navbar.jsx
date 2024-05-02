import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "bootstrap";
let Navbara = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary p-4">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMUu7FqlVgtCwE9bZ7IxI6CyhBj7bJNls4S5pD8oVAukS5IWoflVho_3yt6gkfMqnSQvM&usqp=CAU"
              alt=""
              width={50}
            />
            <b>Hootsuite</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mx-4" >
              <Nav.Link href="#home"><b>Platform</b></Nav.Link>
              <Nav.Link href="#link"><b>Plans</b></Nav.Link>
              <Nav.Link href="#link"><b>Enterprise</b></Nav.Link>
              <Nav.Link href="#link"><b>Resourses</b></Nav.Link>
              <Nav.Link href="#link"><b>Education</b></Nav.Link>
            </Nav>
            <Nav className="ms-auto">
            <Nav.Link href="#home"><b>ContactUs</b></Nav.Link>
              <Nav.Link href="#link"><b>Login</b></Nav.Link>
              <button className="btn btn-success">SignUp</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navbara;
