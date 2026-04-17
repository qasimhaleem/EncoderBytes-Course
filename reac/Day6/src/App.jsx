import Header from "./Components/Header/Header"
import Form from "./Components/From/Form"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Home from "./Components/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (

    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Form />} />
      </Routes>


    </BrowserRouter>  
    </>

  )
}

export default App
