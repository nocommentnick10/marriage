import { FC } from "react";
import styles from "./header.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.links}>
            <li>
              <a href="#" className={styles.link}>
                Место проведения
              </a>
            </li>
            <li>
              <a href="#">Программа</a>
            </li>
            <li>
              <a href="#">Подтвердите присутствие </a>
            </li>
          </ul>
      </nav>
    </header>
  )
};
