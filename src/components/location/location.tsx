import { FC } from "react";
import styles from "./location.module.scss";
import Place from "../../assets/img/place.png";
import NewPlace from "../../assets/img/newPlace.png";
import {
  Map,
  Placemark,
  RouteButton,
  ZoomControl,
} from "@pbe/react-yandex-maps";

export const LocationMap: FC = () => {
  return (
    <section className={styles.location}>
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
      </div>
    </section>
  );
};
