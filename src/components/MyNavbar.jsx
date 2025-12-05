import { Col, Container, Row, Button } from "react-bootstrap";

const MyNavbar = function () {
  return (
    <>

      <Container
        fluid
        className="bg-dark align-content-center"
        style={{ height: "60px" }}>
        <Row className="justify-content-evenly w-100">
          <Col>
            <Button className="bg-transparent border-0">
              <i className="bi bi-list text-danger h-25"></i>
            </Button>
          </Col>
          <Col className="text-center">
            <img className="d-lg-none logo" src="/logos/music.svg" alt="Company logo" />


          </Col>
          <Col className="text-end">
            <h5 className="text-danger">Accedi</h5>
          </Col>


        </Row>
      </Container>

    </>
  )
}
export default MyNavbar