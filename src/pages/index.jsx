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
      <StyledAniLink swipe to="/brunch/" entryOffset={10}>
        BRUNCH
      </StyledAniLink>
      <StyledAniLink swipe direction="down" entryOffset={10} to="/signature/">
        SIGNATURE
      </StyledAniLink>
      <StyledAniLink swipe direction="left" entryOffset={10} to="/new/">
        NEW
      </StyledAniLink>
    </Wrap>
  </Layout>
)

export default IndexPage
