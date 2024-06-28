import { FC, useEffect, useState } from "react";
import styles from "./hero.module.scss";
import heroImg from "../../assets/img/hero.png";
import icon from "../../assets/img/icon.svg";
import Countdown, {
  CountdownProps,
  CountdownRenderProps,
} from "react-countdown";

const Timer: FC<CountdownRenderProps> = ({ days, hours, minutes, seconds }) => {
  return (
    <div className={styles.row}>
      <div className={styles.timer}>
        <span>{days}</span>
        <span>Дней</span>
      </div>
      <div className={styles.timer}>
        <span>{hours}</span>
        <span>Часов</span>
      </div>
      <div className={styles.timer}>
        <span>{minutes}</span>
        <span>Минут</span>
      </div>
      <div className={styles.timer}>
        <span>{seconds}</span>
        <span>Секунд</span>
      </div>
    </div>
  );
};

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
        <Countdown
          date={new Date().setFullYear(2024, 7, 23)}
          renderer={Timer}
        />
      </div>
    </section>
  );
};
