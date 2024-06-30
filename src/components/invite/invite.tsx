import { FC } from "react";
import { motion } from "framer-motion";
import styles from "./invite.module.scss";

export const Invite: FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ ease: "easeOut", duration: 1.5 }}
      className={styles.invite}
    >
      <h2>Дорогие Наши Родные и друзья!</h2>
      <span>23 августа 2024года</span>
      <span>Состоится долгожданное событие: наша свадьба!</span>
      <p>
        Этот особенный для нас день мы будем счастливы провести в окружении
        самых близких и дорогих для нас людей!
      </p>
      <p>
        С удовольствием приглашаем Вас разделить радость этого дня вместе с
        нами!
      </p>
    </motion.section>
  );
};
