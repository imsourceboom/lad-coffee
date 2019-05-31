import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

import Layout from "../templates/layout"
import SEO from "../templates/seo"

const Wrap = styled.div`
  display: flex;
`
const StyledAniLink = styled(AniLink)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  &:first-child {
    background-color: white;
  }

  &:nth-child(2) {
    background-color: rgba(206, 204, 184, 1);
  }

  &:last-child {
    background-color: black;
    color: white;
  }
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrap>
      <StyledAniLink swipe direction="up" entryOffset={10} to="/food/">
        food
      </StyledAniLink>
      <StyledAniLink swipe direction="up" entryOffset={10} to="/signature/">
        signature
      </StyledAniLink>
      <StyledAniLink swipe direction="up" entryOffset={10} to="/new/">
        new
      </StyledAniLink>
    </Wrap>
  </Layout>
)

export default IndexPage
