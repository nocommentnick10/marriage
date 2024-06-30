import { FC } from "react";
import { motion } from "framer-motion";
import styles from "./timeTable.module.scss";
import Map from "../../assets/img/map.svg";
import Ring from "../../assets/img/ring.svg";
import Drink from "../../assets/img/drink.svg";
import Cake from "../../assets/img/cake.svg";

export const TimeTable: FC = () => {
  return (
    <section id="time-table" className={styles.container}>
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className={styles.invite}
      >
        time table
      </motion.h2>
      <div className={styles.timeTable}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ ease: "easeOut", duration: 0.7 }}
        >
          <h2 className={styles.invite}>
            <span>15:00</span>
          </h2>
          <div className={styles.imgHolder}>
            <img src={Map} alt="Фуршет" />
          </div>
          <p>сбор гостей, фуршет</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
        >
          <span>16:00</span>
          <div className={styles.imgHolder}>
            <img src={Ring} alt="Регистрация" />
          </div>
          <p>выездная регестрация</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ ease: "easeOut", duration: 0.9 }}
        >
          <span>17:00</span>
          <div className={styles.imgHolder}>
            <img src={Drink} alt="Банкет" />
          </div>
          <p>банкет</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <span>22:00</span>
          <div className={styles.imgHolder}>
            <img src={Cake} alt="Окончание банкета" />
          </div>
          <p>сбор гостей, фуршет</p>
        </motion.div>
      </div>
    </section>
  );
};
