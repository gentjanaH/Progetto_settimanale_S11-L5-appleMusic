import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import './App.css'
import MyNavbar from "./components/MyNavbar"
import DinamicSection from "./components/DinamicSection"
import { Provider } from 'react-redux'
import store from "./redux/store"
import { Container, Row, Col } from "react-bootstrap"
import DesktopNav from "./components/DesktopNav"
import NovitàStaticSection from "./components/NovitàStaticSection"

function App() {


  return (
    <>
      <Provider store={store}>
        <Container fluid className="">

          <Row >
            <Col xs={12} className="p-0">
              <MyNavbar />
            </Col>
          </Row>
          <Row>
            <Col lg={2} className="d-none d-lg-flex p-0">
              <DesktopNav />
            </Col>
            <Col xs={12} lg={10} className="p-0">
              <NovitàStaticSection />
            </Col>

            <Col xs={12} lg={10} className="d-flex flex-end p-0">
              <DinamicSection />
            </Col>

          </Row>
        </Container>
      </Provider>
    </>
  )
}

export default App
