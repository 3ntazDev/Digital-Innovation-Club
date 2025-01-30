import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Events from "./pages/Events"
import Team from "./pages/Team"
import Contact from "./pages/Contact"
import Graduates from "./pages/Graduates"
import CustomFooter from "./components/Footer"
import "./App.css"
import "aos/dist/aos.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/graduates" element={<Graduates />} />
        </Routes>
         <CustomFooter />
      </div>
    </Router>
  )
}

export default App

