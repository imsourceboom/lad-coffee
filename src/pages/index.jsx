import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

import Layout from "../templates/layout"
import SEO from "../templates/seo"
import Image from "../components/image"

const Container = styled.section`
  padding: 5rem 3rem 1rem;
`

const Wrap = styled.article`
  padding-bottom: 6rem;
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
            <AniLink fade to="/brunch/detail#0">
              <Image filename="origin/b/avocado.jpg" />
              <Name>
                <p>계란아보카도 샌드위치</p>
              </Name>
            </AniLink>
          </Item>
          <Item center>
            <AniLink fade to="/brunch/detail#1">
              <Image filename="origin/b/garlic.jpg" />
              <Name>
                <p>갈릭쉬림프 샌드위치</p>
              </Name>
            </AniLink>
          </Item>
          <Item>
            <AniLink fade to="/brunch/detail#2">
              <Image filename="origin/b/potato.jpg" />
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
            <AniLink fade to="/signature/detail#0">
              <Image filename="origin/s/almond.jpg" />
              <Name>
                <p>스노우볼</p>
                <p>솔티 아몬드 크림커피</p>
              </Name>
            </AniLink>
          </Item>
          <Item center>
            <AniLink fade to="/signature/detail#1">
              <Image filename="origin/s/nutella.jpg" />
              <Name>
                <p>누텔라 쉐이크</p>
                <p>스노우 밤</p>
                <p>쿠키베리</p>
              </Name>
            </AniLink>
          </Item>
          <Item>
            <AniLink fade to="/signature/detail#2">
              <Image filename="origin/s/red-blue.jpg" />
              <Name>
                <p>레드 카페오레 안나</p>
                <p>블루 카페오레 안나</p>
              </Name>
            </AniLink>
          </Item>
          <Item>
            <AniLink fade to="/signature/detail#3">
              <Image filename="origin/s/refresh.jpg" />
              <Name>
                <p>마이또</p>
                <p>시트러스 썸</p>
                <p>리프레싱 주스</p>
              </Name>
            </AniLink>
          </Item>
          <Item center>
            <AniLink fade to="/signature/detail#4">
              <Image filename="origin/s/tiger.jpg" />
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
            <AniLink fade to="/new/detail#0">
              <Image filename="origin/s/tiger.jpg" />
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
