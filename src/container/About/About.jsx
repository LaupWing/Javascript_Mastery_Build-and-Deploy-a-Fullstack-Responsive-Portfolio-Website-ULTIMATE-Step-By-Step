import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

import "./About.scss"
import { images } from "../../constants"
import { client, urlFor } from "../../client"
import AppWrap from "../../wrapper/AppWrap"


const About = () => {
   const [abouts, setAbout] = useState([])

   useEffect(() => {
      const query = "*[_type == 'abouts']"
      
      client.fetch(query)
         .then((data)=>{
            console.log(data)
            setAbout(data)
         })
   }, [])
   

   return (
      <>
         <h2 className="head-text">
            I know that
            <span>Good Design</span>
            <br />
            means
            <span>Good Business</span>
         </h2>
         <div className="app__profiles">
            {abouts.map((about, index) => (
               <motion.div
                  whileInView={{ opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{
                     duration: 0.5,
                     type: "tween",
                  }}
                  key={about.title}
                  className="app__profile-item"
               >
                  <img src={urlFor(about.imgUrl)} alt={about.title} />
                  <h2 className="bold-text" style={{ margintop: 20 }}>
                     {about.title}
                  </h2>
                  <p className="p-text" style={{ margintop: 10 }}>
                     {about.description}
                  </p>
               </motion.div>
            ))}
         </div>
      </>
   )
}

export default AppWrap(About, "about")
