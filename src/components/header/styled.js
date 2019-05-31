import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  display: flex;
  height: 50px;
`

export const StyledAniLink = styled(AniLink)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

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
