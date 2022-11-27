import React from "react"
import { BsTwitch, BsInstagram } from "react-icons/bs"
import { FaFacebook, FaYoutube } from "react-icons/fa"

const SocialMedia = () => {
   return (
      <div className="app__social">
         <div>
            <BsTwitch/>
         </div>
         <div>
            <BsInstagram/>
         </div>
         <div>
            <FaFacebook/>
         </div>
         <div>
            <FaYoutube/>
         </div>
      </div>
   )
}

export default SocialMedia
