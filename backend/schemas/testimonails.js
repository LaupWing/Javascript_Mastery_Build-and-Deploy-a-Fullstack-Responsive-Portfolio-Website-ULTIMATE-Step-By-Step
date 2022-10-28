export default {
   name: "testimonials",
   title: "Testimonails",
   type: "document",
   fields:[
      {
         name: "name",
         title: "Name",
         type: "string"
      },
      {
         name: "company",
         title: "Company",
         type: "string"
      },
      {
         name: "feedback",
         title: "Feedback",
         type: "string"
      },
      {
         name: "imageurl",
         title: "ImageUrl",
         type: "image",
         options:{
            hotspot: true
         }
      },
   ],
}