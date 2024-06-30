import { FC } from "react";
import { motion } from "framer-motion";
import styles from "./hero.module.scss";
import heroImg from "../../assets/img/hero.png";
import icon from "../../assets/img/icon.svg";
import Countdown, { CountdownRenderProps } from "react-countdown";

const Timer: FC<CountdownRenderProps> = ({ days, hours, minutes, seconds }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className={styles.row}
    >
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
    </motion.div>
  );
};

export const Hero: FC = () => {
  return (
    <section className={styles.hero}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <img src={heroImg} alt="Вова и Настя" className={styles.heroImg} />
      </motion.div>
      <div className={styles.col}>
        <div className={styles.heading}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <p>Владимир</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <img src={icon} alt="Лебеди" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <p>Анастасия</p>
          </motion.div>
        </div>
        <Countdown date="2024-08-23T00:00:00" renderer={Timer} />
      </div>
    </section>
  );
};
