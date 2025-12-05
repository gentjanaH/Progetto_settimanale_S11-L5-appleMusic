import { Card, Row, Col, Container, Carousel } from "react-bootstrap"
import CaroselloNuoviEpisodi from "./CaroselloNuoviEpisodi"

const NovitàStaticSection = function () {
    return (
        <Container fluid className="bg-dark text-light">
            <Row >
                <Carousel>

                    <Carousel.Item>
                        <Row>
                            <Col xs={6}>
                                <Card className="img-fluid border-0" >
                                    <Card.Body className="bg-dark text-light">
                                        <Card.Title>  NUOVA STAZIONE RADIO</Card.Title>
                                        <Card.Text>
                                            Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
                                        </Card.Text>

                                    </Card.Body>
                                    <Card.Img variant="bottom" src="/images/1a.png" />
                                </Card>
                            </Col>
                            <Col xs={6}>
                                <Card className="img-fluid border-0" >
                                    <Card.Body className="bg-dark text-light">
                                        <Card.Title>  NUOVA STAZIONE RADIO</Card.Title>
                                        <Card.Text>
                                            Ecco la nuova casa della musica latina
                                        </Card.Text>

                                    </Card.Body>
                                    <Card.Img variant="bottom" src="/images/1b.png" />
                                </Card>
                            </Col>


                        </Row>

                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col xs={6}>
                                <Card className="img-fluid border-0" >
                                    <Card.Body className="bg-dark text-light">
                                        <Card.Title>  NUOVA STAZIONE RADIO</Card.Title>
                                        <Card.Text>
                                            Music Radio Club
                                        </Card.Text>

                                    </Card.Body>
                                    <Card.Img variant="bottom" src="/images/1c.png" />
                                </Card>
                            </Col>
                            <Col xs={6}>
                                <Card className="img-fluid border-0" >
                                    <Card.Body className="bg-dark text-light">
                                        <Card.Title>  NUOVA STAZIONE RADIO</Card.Title>
                                        <Card.Text>
                                            Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
                                        </Card.Text>

                                    </Card.Body>
                                    <Card.Img variant="bottom" src="/images/1a.png" />
                                </Card>
                            </Col>
                        </Row>
                    </Carousel.Item>

                </Carousel>

            </Row>
            <CaroselloNuoviEpisodi />
        </Container>


    )

}

export default NovitàStaticSection