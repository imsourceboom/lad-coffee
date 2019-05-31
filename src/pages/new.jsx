import React from "react"
import { Link } from "gatsby"

import Layout from "../templates/layout"
import SEO from "../templates/seo"

const SecondPage = () => (
  <Layout notMain>
    <SEO title="new" />
    <h1>new</h1>
    <p>Welcome to NEW menus</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
