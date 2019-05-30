import React from "react"
import { Link } from "gatsby"

import Layout from "../templates/layout"
import SEO from "../templates/seo"

const SecondPage = () => (
  <Layout headerUse>
    <SEO title="Brunch" />
    <h1>Brunch</h1>
    <b>맛있는 요리</b>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
