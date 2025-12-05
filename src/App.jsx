import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import './App.css'
import MyNavbar from "./components/MyNavbar"
import DinamicSection from "./components/DinamicSection"
import { Provider } from 'react-redux'
import store from "./redux/store"
function App() {


  return (
    <>
      <Provider store={store}>
        <MyNavbar />
        <DinamicSection />
      </Provider>
    </>
  )
}

export default App
