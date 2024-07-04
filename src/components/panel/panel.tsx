import { FC, useEffect, useState } from "react";
import styles from "./panel.module.scss";
import { instance } from "../../api/config";

type Request = {
  id: number;
  name: string;
  status: string;
  guest?: string;
  drinks?: string;
  transport?: string;
};

export const Panel: FC = () => {
  const [requests, setRequests] = useState<Request[]>([]);

  const [error, setError] = useState<string>("");

  const [totalRequests, setTotalRequests] = useState<number>(0);

  const [willComeAmount, setWillComeAmount] = useState<number>(0);
  const [willComeWithPairAmount, setWillComeWithPairAmount] =
    useState<number>(0);
  const [needTransportAmount, setNeedTransportAmount] = useState<number>(0);

  const [djin, setDjin] = useState<number>(0);
  const [whiteWine, setWiteWine] = useState<number>(0);
  const [redWine, setRedWine] = useState<number>(0);
  const [champagne, setChampagne] = useState<number>(0);
  const [vodka, setVodka] = useState<number>(0);
  const [noDrink, setNoDrink] = useState<number>(0);

  const handleAmount = (array: Request[]) => {
    array.forEach((item) => {
      if (item.status === "обязательно приду")
        setWillComeAmount((count) => count + 1);
    });

    array.forEach((item) => {
      if (item.status === "обязательно приду с парой")
        setWillComeWithPairAmount((count) => count + 1);
    });

    array.forEach((item) => {
      if (item.status === "на трансфере")
        setNeedTransportAmount((count) => count + 1);
    });

    array.forEach((item) => {
      if (item.drinks) {
        const drinks: string[] = JSON.parse(item.drinks);
        console.log(drinks);
        drinks.forEach((item) => {
          if (item === "Джин") setDjin((count) => count + 1);
          if (item === "Вино белое") setWiteWine((count) => count + 1);
          if (item === "Вино красное") setRedWine((count) => count + 1);
          if (item === "Шампанское") setChampagne((count) => count + 1);
          if (item === "Водка") setVodka((count) => count + 1);
          if (item === "Не пью") setNoDrink((count) => count + 1);
        });
      }
    });
  };

  const getInitialData = async () => {
    const requestsResponse = await instance
      .get("requests")
      .then((response) => response.data as Request[])
      .catch((err) => {
        setError(err as string);
      });

    if (!requestsResponse) return;

    setRequests(requestsResponse);

    setTotalRequests(requestsResponse.length);
    handleAmount(requestsResponse);
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <div>
          <h2>Итого заявок: </h2>
          <span>{totalRequests}</span>
        </div>
        <div>
          <h2>Из них придут одни: </h2>
          <span>{willComeAmount}</span>
        </div>
        <div>
          <h2>С парой придут: </h2>
          <span>{willComeWithPairAmount}</span>
        </div>
        <div>
          <h2>Нужен транспорт: </h2>
          <span>{needTransportAmount}</span>
        </div>
        <div>
          <h2>Из них выбрали: </h2>
        </div>
        <div className={styles.drinks}>
          <div>
            <p>
              Джин🍹: <span>{djin}</span>
            </p>
            <p>
              Вино белое🍶: <span>{whiteWine}</span>
            </p>
            <p>
              Вино красное🍷: <span>{redWine}</span>
            </p>
          </div>
          <div>
            <p>
              Шампанское🥂: <span>{champagne}</span>
            </p>
            <p>
              Водку🍸: <span>{vodka}</span>
            </p>
            <p>
              Не пьют🍼: <span>{noDrink}</span>
            </p>
          </div>
        </div>
        <div>
          <h2>Итого гостей: </h2>
          <span>{willComeAmount + willComeWithPairAmount * 2}</span>
        </div>
      </div>
      <div className={styles.requests}>
        {requests.map((item) => (
          <div className={styles.request}>
            <span>{item.id}</span>
            <div>
              <h2>Имя: </h2>
              <p>{item.name}</p>
            </div>
            <div>
              <h2>Статус: </h2>
              <p>{item.status}</p>
            </div>
            {item.guest && (
              <div>
                <h2>Гость: </h2>
                <p>{item.guest}</p>
              </div>
            )}
            {item.drinks && (
              <div>
                <h2>Напитки: </h2>
                <p>{item.drinks}</p>
              </div>
            )}
            {item.transport && (
              <div>
                <h2>Как планирует добираться: </h2>
                <p>{item.transport}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
