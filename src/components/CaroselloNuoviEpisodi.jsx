

import { Col, Row, Image, Carousel, } from "react-bootstrap";

function CaroselloNuoviEpisodi() {
    return (
        <>
            <Col xs={12}>
                <h5 className="my-3">Nuovi episodi radio</h5>
            </Col>
            <Carousel>

                <Carousel.Item>
                    <Row>
                        <Col xs={3}>
                            <Image src="/images/2a.png" rounded className="img-fluid" /></Col>
                        <Col xs={3}>
                            <Image src="/images/2b.png" rounded className="img-fluid" /></Col>
                        <Col xs={3}>
                            <Image src="/images/2c.png" rounded className="img-fluid" /></Col>
                        <Col xs={3}>
                            <Image src="/images/2d.png" rounded className="img-fluid" /></Col>


                    </Row>

                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col xs={3}>
                            <Image src="/images/2e.png" rounded className="img-fluid" /></Col>
                        <Col xs={3}>
                            <Image src="/images/2f.png" rounded className="img-fluid" /></Col>
                        <Col xs={3}>
                            <Image src="/images/2a.png" rounded className="img-fluid" /></Col>
                        <Col xs={3}>
                            <Image src="/images/2b.png" rounded className="img-fluid" /></Col>
                    </Row>
                </Carousel.Item>

            </Carousel>
        </>
    );
}

export default CaroselloNuoviEpisodi
    ;