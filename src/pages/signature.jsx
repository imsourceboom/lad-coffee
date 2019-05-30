import React from "react"
import { Link } from "gatsby"

import Layout from "../templates/layout"
import SEO from "../templates/seo"

const SecondPage = () => (
  <Layout headerUse>
    <SEO title="Signature" />
    <h1>Signature</h1>
    <p>Welcome to Signature</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
