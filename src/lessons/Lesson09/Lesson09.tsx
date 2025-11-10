import { useState, type ChangeEvent } from "react";

import Counter from "components/Counter/Counter";
import {
  AnimalBox,
  BoxInfo,
  InputsWrapper,
  Lesson09Wrapper,
  Result,
} from "./styles.ts";
import Input from "components/Input/Input.tsx";
import Button from "components/Button/Button.tsx";

function Lesson09() {
  // Контролируемый компонент - это компонент, значение которого мы храним в локальном хранилище
  // и изменяем его с помощью ф-ции для изменнения состояния.
  // Эти значения мы передаем в атрибуты value и onChange через пропсы компонента(Input)
  // 1 шаг - создаем state
  const [userEmail, setUserEmail] = useState<string>("");
  const [result, setResult] = useState<string>("");

  // 2 шаг - создание ф-ции для изменения значения в инпуте. Для получения значения, которое пользователь
  // ввел мы будем использовать объект Event
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value);
  };

  const showResult = () => {
    setResult(userEmail);
  };

  console.log(userEmail);

  // ------------------------------
  const [counter, setCounter] = useState<number>(0);

  const onMinusClick = (): void => {
    setCounter((prevState) => prevState - 5);
  };

  const onPlusClick = (): void => {
    setCounter((prevState) => prevState + 5);
  };

  return (
    <Lesson09Wrapper>
      <InputsWrapper>
        {/* Данный компонент явл. неконтролируемым, т.к. его значение и изменнение контролирует браузер
      а мы только видим результат */}
        <Input
          name="user_name"
          label="User name"
          id="user_name_id"
          placeholder="Enter your name"
        />
        <Input
          name="user_name"
          label="User name"
          id="user_name_id"
          placeholder="Enter your name"
          value={userEmail}
          onChange={onChangeEmail}
        />
        <Button name="GET RESULT" onClick={showResult} />
        <Result>{result}</Result>
      </InputsWrapper>

      <Counter
        counter={counter}
        onMinusClick={onMinusClick}
        onPlusClick={onPlusClick}
      />
      <BoxInfo>Information</BoxInfo>
      <AnimalBox>
        <p>Animal card</p>
      </AnimalBox>
    </Lesson09Wrapper>
  );
}

export default Lesson09;
