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
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { Header } from "../components/header"
import GlobalStyled from "../styles/global-styled"

const Main = styled.main`
  position: relative;
  /* height: 100%; */
  min-height: 100vh;
  max-height: 100vh;
  overflow-y: scroll;
  /* padding: ${props => (props.Padding ? "3rem 1rem" : "0")}; */
  margin-top: ${props => props.Padding && "30px"};
`

const GoHome = styled(AniLink)`
  position: fixed;
  left: 50%;
  bottom: 1rem;
  transform: translateX(-50%);
  color: white;
  z-index: 1000;
  font-size: 18px;
  opacity: 0;
`

const Layout = ({ children, notMain }) => (
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
        {notMain && <Header siteTitle={data.site.siteMetadata.title} />}
        {notMain ? <Main Padding>{children}</Main> : <Main>{children}</Main>}
        {/* {notMain && (
          <GoHome swipe direction="down" entryOffset={50} top="entry" to="/">
            lad coffee
          </GoHome>
        )} */}
        <GoHome swipe direction="down" entryOffset={50} top="entry" to="/">
          lad coffee
        </GoHome>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
