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
            <Button className="bg-transparent border-0 d-none d-lg-inline">
              <i class="bi bi-shuffle"></i>
            </Button>
            <Button className="bg-transparent border-0 d-none d-lg-inline">
              <i className="bi bi-skip-backward-fill text-light "></i>
            </Button>
            <Button className="bg-transparent border-0 d-none d-lg-inline">
              <i class="bi bi-caret-right-fill"></i>
            </Button>
            <Button className="bg-transparent border-0 d-none d-lg-inline">
              <i className="bi bi-skip-forward-fill text-light"></i>
            </Button>
            <Button className="bg-transparent border-0 d-none d-lg-inline">
              <i className="bi bi-repeat text-danger "></i>
            </Button>
            <Button className="bg-transparent border-0 d-lg-none ">
              <i className="bi bi-list text-danger"></i>
            </Button>
          </Col>

          <Col className="d-flex justify-content-center">

            <img className="logo d-lg-none" src="/logos/music.svg" alt="Company logo" />

            <img className="logo d-none d-lg-inline" src="/logos/apple.svg" alt="Company logo" />


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