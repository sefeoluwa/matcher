import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Home, CreatePost, Login } from './pages'



function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
