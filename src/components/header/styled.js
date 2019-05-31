import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  display: flex;
  height: 30px;
  font-family: "Noto Sans KR", sans-serif;
`

export const StyledAniLink = styled(AniLink)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
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
