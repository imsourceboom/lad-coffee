import React from "react"
import Swiper from "react-id-swiper"
import { Autoplay, EffectFade } from "swiper/dist/js/swiper.esm"
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
  loop: true,
  speed: 2000,
  modules: [Autoplay, EffectFade],
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
}

const Detail = () => {
  return (
    <Layout notMain>
      <SEO title="brunch" />
      <Swiper {...params}>
        <Item className="swiper-slide">
          <Image filename="brunch/madeleine_resize.jpg" />
        </Item>
        <Item className="swiper-slide">
          <Image filename="brunch/garlic_resize.jpg" />
        </Item>
        <Item className="swiper-slide">
          <Image filename="brunch/potato_resize.jpg" />
        </Item>
        <Item className="swiper-slide">
          <Image filename="signature/almond_resize.jpg" />
        </Item>
        <Item className="swiper-slide">
          <Image filename="signature/nutella_resize.jpg" />
        </Item>
        <Item className="swiper-slide">
          <Image filename="signature/red-blue_resize.jpg" />
        </Item>
        <Item className="swiper-slide">
          <Image filename="signature/refresh_resize.jpg" />
        </Item>
        <Item className="swiper-slide">
          <Image filename="signature/tiger_resize.jpg" />
        </Item>
      </Swiper>
    </Layout>
  )
}

export default Detail
