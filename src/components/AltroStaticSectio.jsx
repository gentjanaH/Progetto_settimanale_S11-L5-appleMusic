import { Card, Col, Container, Row } from "react-bootstrap"

const AltroStaticSection = function () {
    return (

        <Container fluid className="bg-dark text-light">
            <Row className="m-0">
                <Col xs={12}>
                    <h4 className="my-3">Altro da esplorare</h4>
                </Col>

                <Col >
                    <Row className="g-3" xs={1} md={2} lg={3}>
                        <Col>
                            <Card className="lista text-danger border-0 w-100">
                                <Card.Body className="d-flex justify-content-between align-items-center">
                                    <span>Esplora per genere</span>
                                    <i className="bi bi-caret-right"></i>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>   <Card className="lista text-danger border-0 w-100">
                            <Card.Body className="d-flex justify-content-between align-items-center">
                                <span>Decenni</span>
                                <i className="bi bi-caret-right"></i>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col>
                            <Card className="lista text-danger border-0 w-100">
                                <Card.Body className="d-flex justify-content-between align-items-center">
                                    <span>Attività e stati d'animo</span>
                                    <i className="bi bi-caret-right"></i>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="lista text-danger border-0 w-100">
                                <Card.Body className="d-flex justify-content-between align-items-center">
                                    <span>Worldwide</span>
                                    <i className="bi bi-caret-right"></i>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="lista text-danger border-0 w-100">
                                <Card.Body className="d-flex justify-content-between align-items-center">
                                    <span>Classifiche</span>
                                    <i className="bi bi-caret-right"></i>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="lista text-danger border-0 w-100">
                                <Card.Body className="d-flex justify-content-between align-items-center">
                                    <span>Audio spaziale</span>
                                    <i className="bi bi-caret-right"></i>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card className="lista text-danger border-0 w-100">
                                <Card.Body className="d-flex justify-content-between align-items-center">
                                    <span>Video musicali</span>
                                    <i className="bi bi-caret-right"></i>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col>
                            <Card className="lista text-danger border-0 w-100">
                                <Card.Body className="d-flex justify-content-between align-items-center">
                                    <span>Nuovi artisti</span>
                                    <i className="bi bi-caret-right"></i>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col>
                            <Card className="lista text-danger border-0 w-100">
                                <Card.Body className="d-flex justify-content-between align-items-center">
                                    <span>Hit del passato</span>
                                    <i className="bi bi-caret-right"></i>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Col>



            </Row>
        </Container>

    )
}

export default AltroStaticSection