'use client'

import Slider from "react-slick";

import { OUR_WORK_IMAGES } from "@/constant/home";

import styles from './index.module.scss'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OurWork() {
  var settings = {
    dots: false,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className={styles.our_work}>
      <div className={styles.section}>
        <div className={styles.title_container}>
          <div className={styles.label}>PT. Djangkar Miring Indonesia</div>
          <div className={styles.title}>Kerja Kami</div>
        </div>

        <div className={styles.carousel}>
          <div className={styles.container}>
            <Slider {...settings}>
              {OUR_WORK_IMAGES.map((image, key: number) => (
                <div
                  className={styles.carousel_item}
                  key={`carousel_item-${key}`}
                >
                  <img src={image.src} alt={`carousel_item-${key}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
