import { FC } from "react";
import styles from "./timeTable.module.scss";
import Map from "../../assets/img/map.svg";
import Ring from "../../assets/img/ring.svg";
import Drink from "../../assets/img/drink.svg";
import Cake from "../../assets/img/cake.svg";

export const TimeTable: FC = () => {
  return (
    <section className={styles.container}>
      <h2>time table</h2>
      <div className={styles.timeTable}>
        <div>
          <span>15:00</span>
          <div className={styles.imgHolder}>
            <img src={Map} alt="Фуршет" />
          </div>
          <p>сбор гостей, фуршет</p>
        </div>
        <div>
          <span>16:00</span>
          <div className={styles.imgHolder}>
            <img src={Ring} alt="Регистрация" />
          </div>
          <p>выездная регестрация</p>
        </div>
        <div>
          <span>17:00</span>
          <div className={styles.imgHolder}>
            <img src={Drink} alt="Банкет" />
          </div>
          <p>банкет</p>
        </div>
        <div>
          <span>22:00</span>
          <div className={styles.imgHolder}>
            <img src={Cake} alt="Окончание банкета" />
          </div>
          <p>сбор гостей, фуршет</p>
        </div>
      </div>
    </section>
  );
};
