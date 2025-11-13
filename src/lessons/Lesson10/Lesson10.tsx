import { useState, type ChangeEvent, useEffect } from "react";

import { InputsWrapper, Lesson10Wrapper, Result } from "./styles";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import axios from "axios";

function Lesson10() {
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  // -----------------------------------------------------
  const [joke, setJoke] = useState<string>("");
  const [error, setError] = useState<undefined | string>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value);
  };

  console.log("Lesson10 rerender");

  // useEffect при монтировании компонента (1-й рендер)
  // Чтобы ф-ция (1-й аргумент) выполнилась только 1 раз (при первом рендере)
  // нужно передать пустой массив зависимостей
  useEffect(() => {
    console.log("Mounting");
  }, []);

  // useEffect при обновлении компонента (повторные рендеры)
  // Чтобы функция (1-й аргумент)  выполнялась каждый раз при изменении определённого
  // значения (состоянии) первого инпута, тогда во второй аргумент - массив зависимостей
  // нужно добавить соответствующую переменную
  useEffect(() => {
    console.log("First input update");
  }, [userName]);

  // useEffect при размонтировании компонента
  // Чтобы ПЕРЕД размонтированием компонента выполнилось какое-то действие,
  // его нужно прописать внутри ф-ции, которая будет возвращаться из первого аргумента useEffect,
  // при этом массив зависимостей передаем пустым
  useEffect(() => {
    return () => {
      console.log("Unmounting");
    };
  }, []);

  // --------------------

  const fetchJokeData = async () => {
    setJoke("");
    setError(undefined);
    try {
      const result = await axios.get(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = result.data;
      console.log(result.data);
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (error: any) {
      setError(error.message);
    } finally {
    }
  };

  useEffect(() => {
    fetchJokeData();
  }, []);

  useEffect(() => {
    fetchJokeData();
  }, [userName]);

  return (
    <Lesson10Wrapper>
      <InputsWrapper>
        <Input
          name="user_name"
          label="User name"
          id="user_name_id"
          placeholder="Enter your name"
          value={userName}
          onChange={onChangeName}
        />
        <Input
          name="user_email"
          label="User email"
          id="user_email_id"
          placeholder="Enter your email"
          value={userEmail}
          onChange={onChangeEmail}
        />
        <Button name="GET RESULT" onClick={fetchJokeData} />
      </InputsWrapper>
      <Result>{error ? error : joke}</Result>
    </Lesson10Wrapper>
  );
}
export default Lesson10;
