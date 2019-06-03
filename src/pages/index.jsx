import React from "react"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

import Layout from "../templates/layout"
import SEO from "../templates/seo"

const Container = styled.section``

const Wrap = styled.article`
  display: flex;
  font-family: "Noto Sans KR", sans-serif;
  border: 1px solid black;
`

const List = styled.ul``
const Item = styled.li``
// const StyledAniLink = styled(AniLink)`
//   flex: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   color: #888585;

//   &:first-child {
//     background-color: white;
//   }

//   &:nth-child(2) {
//     background-color: #f6e4c3;
//   }

//   &:last-child {
//     background-color: #2f2f2f;
//   }
// `
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Wrap>
        <h1>FOOD</h1>
        <List>
          <Item />
        </List>
      </Wrap>
      <Wrap>
        <h1>SIGNATURE</h1>
        <List>
          <Item />
        </List>
      </Wrap>
      <Wrap>
        <h1>NEW</h1>
        <List>
          <Item />
        </List>
      </Wrap>
    </Container>
    {/* <Wrap>
      <StyledAniLink swipe direction="up" entryOffset={10} to="/food/">
        food
      </StyledAniLink>
      <StyledAniLink swipe direction="up" entryOffset={10} to="/signature/">
        signature
      </StyledAniLink>
      <StyledAniLink swipe direction="up" entryOffset={10} to="/new/">
        new
      </StyledAniLink>
    </Wrap> */}
  </Layout>
)

export default IndexPage
