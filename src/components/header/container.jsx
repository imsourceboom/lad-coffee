import React from "react"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Container, StyledAniLink } from "./styled"

// const activeStyle = {
//   color: "red",
//   borderBottom: "1px solid red",
// }

export default () => (
  <Container>
    <StyledAniLink fade to="/food/">
      food
    </StyledAniLink>
    <StyledAniLink fade to="/signature/">
      signature
    </StyledAniLink>
    <StyledAniLink fade to="/new/">
      new
    </StyledAniLink>
  </Container>
)
