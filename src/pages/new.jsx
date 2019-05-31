import React from "react"
import { Link } from "gatsby"

import Layout from "../templates/layout"
import SEO from "../templates/seo"
import Image from "../components/image"

const SecondPage = () => (
  <Layout notMain>
    <SEO title="new" />
    <Image filename="origin.png" />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
