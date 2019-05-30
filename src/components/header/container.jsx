import React from "react"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Container, StyledAniLink } from "./styled"

export default () => (
  <Container>
    <StyledAniLink fade to="/brunch">
      Brunch
    </StyledAniLink>
    <StyledAniLink fade to="/signature">
      Signature
    </StyledAniLink>
    <StyledAniLink fade to="/new">
      New
    </StyledAniLink>
  </Container>
)
