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

const New = () => (
  <Layout notMain>
    <SEO title="new" />
    <Container>
      <Box>
        <Item>
          <AniLink fade to="/new/detail#0">
            <Image filename="origin/s/tiger.jpg" />
            <Title>
              <p>타이거 슈가 밀크티</p>
            </Title>
          </AniLink>
        </Item>
      </Box>
    </Container>
  </Layout>
)

export default New
