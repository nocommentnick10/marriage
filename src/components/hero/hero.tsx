import { FC } from "react";
import styles from "./hero.module.scss";
import heroImg from "../../assets/img/hero.png";
import icon from "../../assets/img/icon.svg";

export const Hero: FC = () => {
  return (
    <section className={styles.hero}>
      <img src={heroImg} alt="Вова и Настя" className={styles.heroImg} />
      <div className={styles.col}>
        <div className={styles.heading}>
          <p>Владимир</p>
          <img src={icon} alt="Лебеди" />
          <p>Анастасия</p>
        </div>
        <div className={styles.row}>
          <div className={styles.timer}>
            <span>00</span>
            <span>Дней</span>
          </div>
          <div className={styles.timer}>
            <span>00</span>
            <span>Часов</span>
          </div>
          <div className={styles.timer}>
            <span>00</span>
            <span>Минут</span>
          </div>
          <div className={styles.timer}>
            <span>00</span>
            <span>Секунд</span>
          </div>
        </div>
      </div>
    </section>
  );
};
