import { Analytics } from "@vercel/analytics/react";
import { Header } from "./components/header/header";
import styles from "./app.module.scss";
import { Hero } from "./components/hero/hero";
import { Invite } from "./components/invite/invite";
import { LocationMap } from "./components/location/location";
import { YMaps } from "@pbe/react-yandex-maps";
import { TimeTable } from "./components/time-table/time-table";
import { Palette } from "./components/palette/palette";
import { Form } from "./components/form/form";
import { Welcome } from "./components/welcome/welcome";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <YMaps>
      <Analytics />
      <div className={styles.app}>
        <div className={styles.container}>
          <Header />
          <Hero />
          <Invite />
        </div>
        <LocationMap />
        <div className={styles.container}>
          <TimeTable />
          <Palette />
          <Form />
          <Welcome />
          <Footer />
        </div>
      </div>
    </YMaps>
  );
}

export default App;
