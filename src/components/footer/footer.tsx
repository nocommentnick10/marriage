import { FC } from "react";
import styles from "./footer.module.scss";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p>С любовью от НД</p>
    </footer>
  );
};
