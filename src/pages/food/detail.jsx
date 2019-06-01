import React from "react"
import Swiper from "react-id-swiper"
import styled from "styled-components"

import Layout from "../../templates/layout"
import SEO from "../../templates/seo"
import Image from "../../components/image"

const Item = styled.div`
  &.swiper-slide {
    min-height: 100vh;
  }
`
const params = {
  spaceBetween: 30,
  loop: true,
}

const Detail = ({ location }) => {
  const startIndex = location.hash.substring(1)
  return (
    <Layout notMain>
      <SEO title="food" />
      <Swiper {...params} activeSlideKey={startIndex}>
        <Item className="swiper-slide" key="0">
          <Image filename="food/avocado.jpg" />
        </Item>
        <Item className="swiper-slide" key="1">
          <Image filename="food/garlic.jpg" />
        </Item>
        <Item className="swiper-slide" key="2">
          <Image filename="food/potato.jpg" />
        </Item>
      </Swiper>
    </Layout>
  )
}

export default Detail
