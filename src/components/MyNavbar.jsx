import { Container, Row, Col, Button } from 'react-bootstrap';

import Navbar from 'react-bootstrap/Navbar';


function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-dark  d-lg-none">
      <Container fluid >
        <Row className="justify-content-evenly w-100">
          <Col>
            <Button className="bg-transparent border-0">
              <i className="bi bi-list text-danger h-25"></i>
            </Button>
          </Col>
          <Col className="text-center">
            <img src="./public/logos/music.svg" alt="Company logo" />


          </Col>
          <Col className="text-end">
            <h5 className="text-danger">Accedi</h5>
          </Col>


        </Row>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;