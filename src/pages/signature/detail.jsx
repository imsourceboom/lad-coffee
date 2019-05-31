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
  // const activeIndex = String()
  return (
    <Layout notMain>
      <SEO title="signature" />
      {location.state.slideKey === "0" && (
        <Swiper {...params} activeSlideKey="0">
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
      )}
      {location.state.slideKey === "1" && (
        <Swiper {...params} activeSlideKey="1">
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
      )}
      {location.state.slideKey === "2" && (
        <Swiper {...params} activeSlideKey="2">
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
      )}
      {location.state.slideKey === "3" && (
        <Swiper {...params} activeSlideKey="3">
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
      )}
    </Layout>
  )
}

export default Detail
