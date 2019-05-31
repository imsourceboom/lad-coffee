import React from "react"
// import { Link } from "gatsby"

import Layout from "../templates/layout"
import SEO from "../templates/seo"
import Image from "../components/image"

const SecondPage = () => (
  <Layout notMain>
    <SEO title="food" />
    <Image filename="clean.jpg" />
  </Layout>
)

export default SecondPage
