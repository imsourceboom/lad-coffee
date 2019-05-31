import React from "react"
// import { Link } from "gatsby"

import Layout from "../templates/layout"
import SEO from "../templates/seo"
import Image from "../components/image"

const SecondPage = () => (
  <Layout notMain>
    <SEO title="signature" />
    <Image filename="elsa.png" />
  </Layout>
)

export default SecondPage
