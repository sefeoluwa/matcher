import { BrowserRouter } from "react-router-dom"

import { Features, Footer, Hero, How, Navbar, Pricing, Team } from './components'

function App() {
  

  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Features />
      <How />
      <Pricing />
      <Team />
      <Footer />
    </BrowserRouter>
  )
}

export default App
