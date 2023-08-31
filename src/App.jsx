import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Home, CreatePost, Login } from './pages'

import { Navbar, Footer } from "./homeComponents"



function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
