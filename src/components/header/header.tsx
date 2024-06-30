import { FC } from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import styles from "./header.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className={styles.links}
        >
          <li>
            <Link smooth to="#location" className={styles.link}>
              Место проведения
            </Link>
          </li>
          <li>
            <Link smooth to="#time-table">
              Программа
            </Link>
          </li>
          <li>
            <Link smooth to="#invite">
              Подтвердите присутствие{" "}
            </Link>
          </li>
        </motion.ul>
      </nav>
    </header>
  );
};
