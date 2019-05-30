import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const Container = styled.header`
  position: sticky;
  top: 0;
  display: flex;
`

export const StyledAniLink = styled(AniLink)`
  flex: 1;
  padding: 2rem 0;
  text-align: center;

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
