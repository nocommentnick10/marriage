import { FC, useState } from "react";
import { motion, useAnimate } from "framer-motion";
import styles from "./form.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Like from "../../assets/img/love.svg";
import { instance } from "../../api/config";

type FormData = {
  name: string;
  attendance: string;
  guest?: string;
  transport?: string;
  drink?: string[];
};

const schema = yup
  .object({
    name: yup.string().required("Поле является обязательным"),
    attendance: yup.string().required("Поле является обязательным"),
    guest: yup.string().when("attendance", {
      is: "обязательно приду с парой",
      then: (schema) => schema.required("Поле является обязательным"),
      otherwise: (schema) => schema.notRequired(),
    }),
    transport: yup.string().when("attendance", {
      is: (val: any) =>
        val === "обязательно приду" || val === "обязательно приду с парой",
      then: (schema) => schema.required("Поле является обязательным"),
      otherwise: (schema) => schema.notRequired(),
    }),
    drink: yup
      .array()
      .of(yup.string().required("Поле является обязательным"))
      .when("attendance", {
        is: (val: any) =>
          val === "обязательно приду" || val === "обязательно приду с парой",
        then: (schema) =>
          schema
            .min(1, "Выберите хотя бы один вариант")
            .of(yup.string().required("Поле является обязательным"))
            .required("Поле является обязательным"),
        otherwise: (schema) => schema.notRequired(),
      }),
  })
  .required();

export const Form: FC = () => {
  const [showForm, setShowForm] = useState<boolean>(false);

  const [backendError, setBackendError] = useState<string>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      attendance: "",
      guest: undefined,
      transport: undefined,
      drink: [],
    },
  });

  const inviteState = watch("attendance");

  const [scope, animate] = useAnimate();

  const onSubmit = async (data: FormData) => {
    await instance
      .post("/requests", {
        name: data.name,
        status: data.attendance,
        guest: data.guest,
        drinks: data.drink,
        transport: data.transport,
      })
      .then((response) => {
        console.log(response);
        animate("form", { height: 0 });
        setShowForm(true);
      })
      .catch((error) => {
        console.log(error);
        const message = String(error);
        setBackendError(message);
      });
    animate("form", { height: 0, opacity: 0 });
    setShowForm(true);
    console.log(data.drink);
  };

  return (
    <motion.section
      id="invite"
      ref={scope}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className={styles.container}
    >
      <div>
        <h2>анкета</h2>
        <p>Просьба заполнить до 20.07.24</p>
      </div>
      <div>
        <span style={{ display: !showForm ? "none" : "flex" }}>
          <img src={Like} alt="Спасибо!" />
        </span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
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

        {inviteState === "обязательно приду с парой" && (
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
        )}

        {inviteState === "обязательно приду" ||
        inviteState === "обязательно приду с парой" ? (
          <div className={styles.inputHolder}>
            <p>ВАШИ ПРЕДПОЧТЕНИЯ ПО АЛКОГОЛЮ</p>
            <label>
              <input
                {...register("drink")}
                type="checkbox"
                value="Джин"
                id="drink"
              />
              Джин
            </label>
            <label>
              <input
                {...register("drink")}
                type="checkbox"
                value="Вино белое"
                id="drink"
              />
              Вино белое
            </label>
            <label>
              <input
                {...register("drink")}
                type="checkbox"
                value="Вино красное"
                id="drink"
              />
              Вино красное
            </label>
            <label>
              <input
                {...register("drink")}
                type="checkbox"
                value="Шампанское"
                id="drink"
              />
              Шампанское
            </label>
            <label>
              <input
                {...register("drink")}
                type="checkbox"
                value="Водка"
                id="drink"
              />
              Водка
            </label>
            <label>
              <input
                {...register("drink")}
                type="checkbox"
                value="Не пью"
                id="drink"
              />
              Не пью
            </label>
            <span>{errors.drink?.message}</span>
          </div>
        ) : (
          ""
        )}

        {inviteState === "обязательно приду" ||
        inviteState === "обязательно приду с парой" ? (
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
            <span>{errors.transport?.message}</span>
            <span>{backendError && backendError}</span>
          </div>
        ) : (
          ""
        )}

        <button type="submit">Отправить</button>
      </form>
    </motion.section>
  );
};
