import { Col, Container, Row, InputGroup, Form, Button } from "react-bootstrap";

const DesktopNav = function () {
    return (
        <>
            <Container fluid className="bg-dark text-light vh-100">
                <Row className="vh-100">
                    <Col xs={12} className="d-none d-lg-flex flex-column">
                        <img className=" my-3"
                            style={{ width: "90px" }}
                            src="/logos/music.svg"
                            alt="Company logo" />
                        <InputGroup className="mb-3 ">
                            <InputGroup.Text className="bg-dark">
                                <i className="bi bi-search text-danger"></i>
                            </InputGroup.Text>
                            <Form.Control className="bg-dark text-light" type="search" placeholder="Search..." />

                        </InputGroup>
                        <Button className="btn btn-dark  my-1 text-start"> <i className="me-3 bi bi-house-door-fill text-danger"></i>
                            Home</Button>
                        <Button className="btn btn-dark  my-1 text-start"> <i className="me-3 bi bi-grid text-danger"></i>

                            Novità</Button>
                        <Button className="btn btn-dark  my-1 text-start"> <i className="me-3 bi bi-broadcast text-danger"></i>
                            Radio</Button>



                    </Col>
                </Row>
            </Container >
        </>
    )
}
export default DesktopNav