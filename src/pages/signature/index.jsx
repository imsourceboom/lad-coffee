import React from "react"
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

import Layout from "../../templates/layout"
import SEO from "../../templates/seo"
import Image from "../../components/image"

const Container = styled.div``

const Box = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-top: 3rem;
`

const Item = styled.li`
  width: 33.333333%;
  padding: 2rem 2rem 1rem;

  & img {
    border-radius: 4px;
  }
`

const Title = styled.div`
  padding-top: 0.75rem;

  & p {
    text-align: center;
  }
`

const Signature = () => (
  <Layout notMain>
    <SEO title="signature" />
    <Container>
      <Box>
        <Item>
          <AniLink fade to="/signature/detail#0">
            <Image filename="origin/s/almond.jpg" />
            <Title>
              <p>솔티 아몬드 크림커피</p>
            </Title>
          </AniLink>
        </Item>
        <Item>
          <AniLink fade to="/signature/detail#1">
            <Image filename="origin/s/nutella.jpg" />
            <Title style={{}}>
              <p>누텔라 쉐이크</p>
              <p>스노우 밤</p>
              <p>쿠키베리</p>
            </Title>
          </AniLink>
        </Item>
        <Item>
          <AniLink fade to="/signature/detail#2">
            <Image filename="origin/s/red-blue.jpg" />
            <Title>
              <p>블루 카페오레 엘사</p>
              <p>레드 카페오레 안나</p>
            </Title>
          </AniLink>
        </Item>
        <Item>
          <AniLink fade to="/signature/detail#3">
            <Image filename="origin/s/refresh.jpg" />
            <Title>
              <p>마이또</p>
              <p>리프레싱 주스</p>
              <p>시트러스 썸</p>
            </Title>
          </AniLink>
        </Item>
      </Box>
    </Container>
  </Layout>
)

export default Signature
