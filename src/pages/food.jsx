import React from "react"
import { Link } from "gatsby"

import Layout from "../templates/layout"
import SEO from "../templates/seo"
import Image from "../components/image"

const SecondPage = () => (
  <Layout notMain>
    <SEO title="food" />
    <Image filename="opti.png" />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
