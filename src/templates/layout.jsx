/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { Header } from "../components/header"
import GlobalStyled from "../styles/global-styled"

const Main = styled.main`
  max-width: 100%;
`

const Layout = ({ children, headerUse }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyled />
        {headerUse && <Header siteTitle={data.site.siteMetadata.title} />}
        <Main>{children}</Main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
