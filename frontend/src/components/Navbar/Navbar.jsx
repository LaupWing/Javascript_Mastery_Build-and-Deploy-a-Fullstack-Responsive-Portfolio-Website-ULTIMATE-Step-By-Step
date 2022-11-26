import React from "react"
import { images } from "../../constants"

import "./Navbar.scss"

const Navbar = () => {
   return (
      <nav>
         <img src={images.logo} alt="logo" />      
      </nav>
   )
}

export default Navbar
