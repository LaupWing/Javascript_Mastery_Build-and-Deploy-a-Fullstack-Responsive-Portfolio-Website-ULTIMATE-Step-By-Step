import createSchema from "part:@sanity/base/schema-creator"

import schemaTypes from "all:part:@sanity/base/schema-type"
import testimonails from "./testimonails"
import abouts from "./abouts"
import brands from "./brands"
import contact from "./contact"
import experiences from "./experiences"
import skills from "./skills"
import workExperience from "./workExperience"
import works from "./works"

export default createSchema({
   name: "default",
   types: schemaTypes.concat([
      testimonails,
      abouts,
      brands,
      contact,
      experiences,
      skills,
      workExperience,
      works,
   ]),
})
