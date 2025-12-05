import { Card, Row, Col } from "react-bootstrap"

const NovitàStaticSection = function () {
    return (

        <Row className="bg-dark">
            <Col xs={12}>
                <h1>Novità</h1>
            </Col>
            <Col xs={6}>
                <Card >

                    <Card.Body>
                        <Card.Title>  NUOVA STAZIONE RADIO</Card.Title>
                        <Card.Text>
                            Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
                        </Card.Text>

                    </Card.Body>
                    <Card.Img variant="bottom" src="/images/1a.png" />
                </Card>


            </Col>
            <Col xs={6}>
                <Card >

                    <Card.Body>
                        <Card.Title>  NUOVA STAZIONE RADIO</Card.Title>
                        <Card.Text>
                            Ecco la nuova casa della musica latina
                        </Card.Text>

                    </Card.Body>
                    <Card.Img variant="bottom" src="/images/1a.png" />
                </Card>


            </Col>
        </Row>


    )

}

export default NovitàStaticSection