import { useDispatch, useSelector } from "react-redux"
import { getNewMusic } from "../redux/actions"
import { useEffect } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"




const DinamicSection = function () {
    const data = useSelector((currentState) => {
        return currentState.results.canzoni

    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNewMusic("ultimo"))
    }, [dispatch])
    console.log(data)

    return (
        <Container fluid className="bg-dark text-light">
            <Row>
                <h2>Risultati musica</h2>
                {data && data.length > 0 ? (


                    data.map((song) => (
                        <>
                            <Col key={song.id} xs={4} md={3}>
                                <Card className="h-100 border-0">
                                    <Card.Img className="img-fluid w-100 border-bottom-2" variant="top" src={song.album.cover_small} />
                                    <Card.Body className="bg-dark text-light">
                                        <Card.Title className="fs-6"> {song.title}</Card.Title>
                                        <Card.Text>
                                            {song.artist.name}
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                        </>
                    ))


                ) : (
                    <p>Nessun risultato</p>
                )}
            </Row>
        </Container>


    )



}

export default DinamicSection