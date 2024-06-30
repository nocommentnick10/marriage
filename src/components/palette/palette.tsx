import { FC } from "react";
import { motion } from "framer-motion";
import styles from "./palette.module.scss";

export const Palette: FC = () => {
  return (
    <section className={styles.container}>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        У нашей свадьбы есть цветовая гамма, мы будем очень признательны, если
        вы наденете одежду в этих оттенках.
      </motion.p>
      <ul>
        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ ease: "easeOut", duration: 1 }}
        ></motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
        ></motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ ease: "easeOut", duration: 2 }}
        ></motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ ease: "easeOut", duration: 2.5 }}
        ></motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ ease: "easeOut", duration: 3 }}
        ></motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ ease: "easeOut", duration: 3.5 }}
        ></motion.li>
      </ul>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className={styles.text}
      >
        Наш праздник для взрослых, так как мы не предполагаем развлечений и
        посадочных мест для детей.
      </motion.p>
    </section>
  );
};
