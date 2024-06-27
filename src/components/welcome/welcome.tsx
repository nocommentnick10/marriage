import { FC } from "react";
import styles from "./welcome.module.scss";
import Photo from "../../assets/img/photo.png";
import Photo2 from "../../assets/img/photo2.png";
import Photo3 from "../../assets/img/photo3.png";

export const Welcome: FC = () => {
  return (
    <section className={styles.container}>
      <h2>мы будем рады видеть вас!</h2>
      <div>
        <img src={Photo} alt="Фото" />
        <img src={Photo2} alt="Фото2" />
        <img src={Photo3} alt="Фото3" />
      </div>
    </section>
  );
};
