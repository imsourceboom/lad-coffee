import React from "react"
import { Link } from "gatsby"

import Layout from "../templates/layout"
import SEO from "../templates/seo"

const SecondPage = () => (
  <Layout notMain>
    <SEO title="signature" />
    <h1>signature</h1>
    <p>Welcome to Signature</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
