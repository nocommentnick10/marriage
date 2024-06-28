import { FC, useState } from "react";
import styles from "./form.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { instance } from "../../api/config";

type FormData = {
  name: string;
  attendance: string;
  guest: string;
  transport: string;
};

const schema = yup
  .object({
    name: yup.string().required("Поле является обязательным"),
    attendance: yup.string().required("Поле является обязательным"),
    guest: yup.string().required("Поле является обязательным"),
    transport: yup.string().required("Поле является обязательным"),
  })
  .required();

export const Form: FC = () => {
  const [ showForm, setShowForm ] = useState<boolean>(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      attendance: "",
      guest: "",
      transport: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    await instance
      .post("/requests", {
        name: data.name,
        status: data.attendance,
        guest: data.guest,
        transport: data.transport,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setShowForm(true);
  };

  return (
    <section className={styles.container}>
      <div>
        <h2>анкета</h2>
        <p>Просьба заполнить до 10.07.24</p>
      </div>
      <div>
        <span style={ { display: !showForm ? "none" : "flex"} }>Спасибо, мы вас ждем!</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} style={ { display: showForm ? "none" : "flex"} }>
        <div className={styles.inputHolder}>
          <p>ФИО</p>
          <input
            {...register("name")}
            type="text"
            placeholder="Ваше имя..."
            className={styles.textInput}
          />
          <span>{errors.name?.message}</span>
        </div>

        <div className={styles.inputHolder}>
          <p>ПОДТВЕРДИТЕ ВАШЕ ПРИСУТСВИЕ</p>
          <div>
            <label>
              <input
                {...register("attendance")}
                type="radio"
                value="обязательно приду"
                id="attendance"
              />
              обязательно приду
            </label>
            <label>
              <input
                {...register("attendance")}
                type="radio"
                value="обязательно приду с парой"
                id="attendance"
              />
              обязательно приду с парой
            </label>
            <label>
              <input
                {...register("attendance")}
                type="radio"
                value="не смогу присутствовать"
                id="attendance"
              />
              не смогу присутствовать
            </label>
          </div>
          <span>{errors.attendance?.message}</span>
        </div>

        <div className={styles.inputHolder}>
          <p>ФИО вашего спутника/спутницы</p>
          <input
            {...register("guest")}
            type="text"
            placeholder="Вторая половинка..."
            className={styles.textInput}
          />
          <span>{errors.guest?.message}</span>
        </div>

        <div className={styles.inputHolder}>
          <p>КАК ПЛАНИРУЕТЕ ДОБИРАТЬСЯ ДО МЕСТА ПРОВЕДЕНИЯ ТОРЖЕСТВА:</p>
          <div>
            <label>
              <input
                {...register("transport")}
                type="radio"
                value="на трансфере"
                id="transport"
              />
              на трансфере
            </label>
            <label>
              <input
                {...register("transport")}
                type="radio"
                value="на личном автомобиле"
                id="transport"
              />
              на личном автомобиле
            </label>
          </div>
          <span>{errors.attendance?.message}</span>
        </div>

        <button type="submit">Отправить</button>
      </form>
    </section>
  );
};
