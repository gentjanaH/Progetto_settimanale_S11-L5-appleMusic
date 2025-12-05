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
            <Row className="g-3">
                <h4 className="my-5">Nuove uscite</h4>
                {data && data.length > 0 ? (


                    data.slice(0, 12).map((song) => (
                        <>
                            <Col key={song.id} xs={4} md={3} lg={2}>
                                <Card className="h-100 border-0">
                                    <Card.Img className="img-fluid w-100" variant="top" src={song.album.cover_medium} />
                                    <Card.Body className="bg-dark text-light">
                                        <h6 className="fs-6"> {song.title}</h6>
                                        <p className="fs-6">
                                            {song.artist.name}
                                        </p>

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