import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

import Layout from "../../templates/layout"
import SEO from "../../templates/seo"
import Image from "../../components/image"

const Container = styled.div``

const Box = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 3rem 0;
  font-weight: 300;
  font-size: 0.9rem;
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

const Food = () => (
  <Layout notMain>
    <SEO title="food" />
    <Container>
      <Box>
        <Item>
          <AniLink fade to="/food/detail#0">
            <Image filename="origin/f/avocado.jpg" />
            <Title>
              <p>계란아보카도 샌드위치</p>
            </Title>
          </AniLink>
        </Item>
        <Item>
          <AniLink fade to="/food/detail#1">
            <Image filename="origin/f/garlic.jpg" />
            <Title>
              <p>갈릭쉬림프 샌드위치</p>
            </Title>
          </AniLink>
        </Item>
        <Item>
          <AniLink fade to="/food/detail#2">
            <Image filename="origin/f/potato.jpg" />
            <Title>
              <p>감자스프 & 크로와상 샌드위치</p>
            </Title>
          </AniLink>
        </Item>
      </Box>
    </Container>
  </Layout>
)

export default Food
