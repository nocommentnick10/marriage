import { FC } from "react";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./location.module.scss";
import Place from "../../assets/img/place.png";
import NewPlace from "../../assets/img/newPlace.png";
import {
  Map,
  Placemark,
  RouteButton,
  ZoomControl,
} from "@pbe/react-yandex-maps";
import { Carousel } from "react-responsive-carousel";
import Slider, { Settings } from "react-slick";

export const LocationMap: FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ ease: "easeOut", duration: 1.5 }}
      className={styles.invite}
    >
      <section id="location" className={styles.location}>
        <h2>Место проведения</h2>
        <div>
          <img src={Place} alt="Белая дача" />
          <div className={styles.col}>
            <div className={styles.mapHolder}>
              <Map
                width={355}
                height={355}
                defaultState={{ center: [54.889998, 73.347452], zoom: 17 }}
              >
                <Placemark geometry={[54.889998, 73.347452]} />
                <ZoomControl />
              </Map>
            </div>
            <div className={styles.bottomCol}>
              <span>Белая дача</span>
              <p>Воровского, 186/19</p>
            </div>
          </div>
          <img src={NewPlace} alt="Белая дача" />
          <div className={styles.slider}>
            <Carousel
              width={375}
              dynamicHeight
              infiniteLoop
              swipeable
              showStatus={false}
              showArrows={false}
              showThumbs={false}
            >
              <img src={Place} alt="Белая дача" />
              <img src={NewPlace} alt="Белая дача" />
            </Carousel>
          </div>
        </div>
      </section>
    </motion.section>
  );
};
