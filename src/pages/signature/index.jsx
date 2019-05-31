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
`

const Item = styled(AniLink)`
  width: 33.333333%;
  height: 300px;
  border: 1px solid red;
`

const Signature = () => (
  <Layout notMain>
    <SEO title="signature" />
    <Container>
      <Box>
        <Item to="/signature/list/" state={{ list: 0 }}>
          <Image filename="origin/s/almond.jpg" />
        </Item>
        <Item to="/signature/list/" state={{ list: 1 }}>
          <Image filename="origin/s/nutella.jpg" />
        </Item>
        <Item to="/signature/list/" state={{ list: 2 }}>
          <Image filename="origin/s/red-blue.jpg" />
        </Item>
        <Item to="/signature/list/" state={{ list: 3 }}>
          <Image filename="origin/s/refresh.jpg" />
        </Item>
      </Box>
    </Container>
  </Layout>
)

export default Signature
