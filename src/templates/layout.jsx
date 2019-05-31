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
  /* min-height: 100vh; */
  max-height: 100vh;
  overflow-y: scroll;
  /* padding: ${props => (props.Padding ? "3rem 1rem" : "0")}; */
  padding: ${props => props.Padding && "5rem 1rem 3rem"};
`

const GoHome = styled(AniLink)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  background-image: url("https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/1510502_559219777502902_1413040028_n.jpg?_nc_cat=105&_nc_ht=scontent-icn1-1.xx&oh=d4159c14f81fc0d602cbba7dc89863fc&oe=5D5E61A7");
  background-size: 180%;
  background-position: center 36%;
  background-repeat: no-repeat;
  z-index: 1000;
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
        {notMain && (
          <GoHome swipe direction="down" entryOffset={50} top="entry" to="/" />
        )}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
