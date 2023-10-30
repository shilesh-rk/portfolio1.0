import { CssBaseline } from "@material-ui/core"
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./components"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Resume from "./components/Resume"


function App() {

  return (
    <>
    <CssBaseline />
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/portfolio' element={<Portfolio />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/resume' element={<Resume />}/>
    </Routes>
    </>
  )
}

export default App
