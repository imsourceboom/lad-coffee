import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

import Layout from "../templates/layout"
import SEO from "../templates/seo"
import Image from "../components/image"

const Container = styled.section`
  padding: 3rem 3rem 1rem;
`

const Wrap = styled.article`
  padding-bottom: 3rem;
`

const Title = styled.h1`
  padding-bottom: 1.5rem;
  /* color: rgba(0, 0, 0, 0.54); */
`

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const Item = styled.li`
  width: 30%;
  padding: 0rem 0 3rem;
  margin: ${props => props.center && "0 5%"};

  & img {
    border-radius: 4px;
  }
`

const Name = styled.div`
  padding-top: 0.75rem;

  & p {
    text-align: center;
    font-size: 0.95rem;
    font-weight: 300;
  }
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Wrap>
        <Title>BRUNCH</Title>
        <List>
          <Item>
            <AniLink to="/brunch/detail#0">
              <Image filename="origin/b/madeleine_512x384.jpg" />
              <Name>
                <p>초코마들렌 & 아이스크림</p>
                <p>바닐라마들렌 & 아이스크림</p>
              </Name>
            </AniLink>
          </Item>
          <Item center>
            <AniLink to="/brunch/detail#1">
              <Image filename="origin/b/garlic_512x384.jpg" />
              <Name>
                <p>갈릭쉬림프 샌드위치</p>
              </Name>
            </AniLink>
          </Item>
          <Item>
            <AniLink to="/brunch/detail#2">
              <Image filename="origin/b/potato_512x384.jpg" />
              <Name>
                <p>감자스프 & 크로와상 샌드위치</p>
              </Name>
            </AniLink>
          </Item>
        </List>
      </Wrap>
      <Wrap>
        <Title>SIGNATURE</Title>
        <List>
          <Item>
            <AniLink to="/signature/detail#0">
              <Image filename="origin/s/almond_512x384.jpg" />
              <Name>
                <p>스노우볼</p>
                <p>솔티 아몬드 크림커피</p>
              </Name>
            </AniLink>
          </Item>
          <Item center>
            <AniLink to="/signature/detail#1">
              <Image filename="origin/s/nutella_512x384.jpg" />
              <Name>
                <p>누텔라 쉐이크</p>
                <p>스노우 밤</p>
                <p>쿠키베리</p>
              </Name>
            </AniLink>
          </Item>
          <Item>
            <AniLink to="/signature/detail#2">
              <Image filename="origin/s/red-blue_512x384.jpg" />
              <Name>
                <p>레드 카페오레 안나</p>
                <p>블루 카페오레 안나</p>
              </Name>
            </AniLink>
          </Item>
          <Item>
            <AniLink to="/signature/detail#3">
              <Image filename="origin/s/refresh_512x384.jpg" />
              <Name>
                <p>마이또</p>
                <p>시트러스 썸</p>
                <p>리프레싱 주스</p>
              </Name>
            </AniLink>
          </Item>
          <Item center>
            <AniLink to="/signature/detail#4">
              <Image filename="origin/s/tiger_512x384.jpg" />
              <Name>
                <p>타이거 슈가 밀크티</p>
              </Name>
            </AniLink>
          </Item>
        </List>
      </Wrap>
      <Wrap>
        <Title>NEW</Title>
        <List>
          <Item>
            <AniLink to="/new/detail#0">
              <Image filename="origin/s/tiger_512x384.jpg" />
              <Name>
                <p>타이거 슈가 밀크티</p>
              </Name>
            </AniLink>
          </Item>
        </List>
      </Wrap>
    </Container>
  </Layout>
)

export default IndexPage
