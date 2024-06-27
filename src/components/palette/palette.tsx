import { FC } from "react";
import styles from "./palette.module.scss";

export const Palette: FC = () => {
  return (
    <section className={styles.container}>
      <p>
        У нашей свадьбы есть цветовая гамма, мы будем очень признательны, если
        вы наденете одежду в этих оттенках.
      </p>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
};
