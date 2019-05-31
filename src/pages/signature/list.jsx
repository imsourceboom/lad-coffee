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

const Detail = props => {
  const activeIndex = String(props.location.state.list)
  return (
    <Layout notMain>
      {console.log(props.location)}
      <SEO title="signature" />
      <Swiper {...params} activeSlideKey={activeIndex}>
        <Item className="swiper-slide" key="0">
          <Image filename="signature/almond.jpg" />
        </Item>
        <Item className="swiper-slide" key="1">
          <Image filename="signature/nutella.jpg" />
        </Item>
        <Item className="swiper-slide" key="2">
          <Image filename="signature/red-blue.jpg" />
        </Item>
        <Item className="swiper-slide" key="3">
          <Image filename="signature/refresh.jpg" />
        </Item>
      </Swiper>
    </Layout>
  )
}

export default Detail
