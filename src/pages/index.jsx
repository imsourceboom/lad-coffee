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
  color: #888585;

  &:first-child {
    background-color: white;
  }

  &:nth-child(2) {
    background-color: #f6e4c3;
  }

  &:last-child {
    background-color: #2f2f2f;
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
