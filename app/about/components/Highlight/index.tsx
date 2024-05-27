"use client";

import Slider from "react-slick";

import { HIGHLIGHT } from "@/constant/about";

import styles from "./index.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Highlight() {
  const settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <div className={styles.highlight}>
      <div className={styles.section}>
        <Slider {...settings}>
          {HIGHLIGHT.map((item) => (
            <div
              className={styles.carousel_item}
              key={`highlight-${item.title}`}
            >
              <div className={styles.text_container}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.description}>{item.description}</div>
              </div>
              <div className={styles.image_container}>
                <img src={item.image} alt={item.title} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
