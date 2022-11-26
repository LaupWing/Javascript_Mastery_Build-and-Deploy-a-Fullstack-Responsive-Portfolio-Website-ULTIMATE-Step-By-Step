import React from "react"
import { Navbar } from "./components"

import { About, Footer, Header, Skills, Testimonials, Works } from "./container"

const App = () => {
   return (
      <div className="app">
         <Navbar/>
         <Header/>
         <About/>
         <Works/>
         <Skills/>
         <Testimonials/>
         <Footer/>
      </div>
   )
}

export default App
