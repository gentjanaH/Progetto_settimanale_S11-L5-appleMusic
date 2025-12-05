import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4 mt-5">
            <Container fluid className="m-0">
                <Row className="justify-content-between align-items-center mb-3">
                    <Col xs="auto">
                        <span className="me-3">Italia</span>
                        <span>English (UK)</span>
                    </Col>
                </Row>

                <Row className="mb-2">
                    <Col>
                        <small>Copyright © 2024 Apple Inc. Tutti i diritti riservati.</small>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md="auto" className="d-flex flex-wrap gap-3">
                        <a href="#" className="text-decoration-none text-light small">Condizioni dei servizi Internet</a>
                        <a href="#" className="text-decoration-none text-light small">Apple Music e privacy</a>
                        <a href="#" className="text-decoration-none text-light small">Avviso sui cookie</a>
                        <a href="#" className="text-decoration-none text-light small">Supporto</a>
                        <a href="#" className="text-decoration-none text-light small">Feedback</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
