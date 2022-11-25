export default {
   name: "abouts",
   title: "Abouts",
   type: "document",
   fields: [
      {
         name: "title",
         type: "string",
         title: "Title",
      },
      {
         name: "description",
         title: "Description",
         type: "string",
      },
      {
         name: "imgUrl",
         title: "ImgUrl",
         type: "image",
         options: {
            hotspot: true,
         },
      },
   ],
}
