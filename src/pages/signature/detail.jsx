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
      <SEO title="signature" />
      <Swiper {...params} activeSlideKey={startIndex}>
        <Item className="swiper-slide" key="0">
          <Image filename="signature/almond_resize.jpg" />
        </Item>
        <Item className="swiper-slide" key="1">
          <Image filename="signature/nutella_resize.jpg" />
        </Item>
        <Item className="swiper-slide" key="2">
          <Image filename="signature/red-blue_resize.jpg" />
        </Item>
        <Item className="swiper-slide" key="3">
          <Image filename="signature/refresh_resize.jpg" />
        </Item>
        <Item className="swiper-slide" key="4">
          <Image filename="signature/tiger_resize.jpg" />
        </Item>
      </Swiper>
    </Layout>
  )
}

export default Detail
