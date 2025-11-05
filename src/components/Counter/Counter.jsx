// Шаг 1 - импорт хука
import { useState } from "react";

import Button from "../Button/Button";
import "./styles.css";

function Counter() {
  // Шаг 2 - вызов хука
  // В вызов хука необходимо передать значение по умолчанию(любой тип данных)
  // Вызов хука возвращает массив из 2-х элементов
  // 1-й - значение (актуальное) стейта
  // 2-й - ф-ция, которая может изменить стейт(т.к. только она может изменять состояние)
  //   const state = useState(0);
  // const counter=state[0]

  const [counter, setCounter] = useState(0);
//   console.log(state);

  // Шаг 3 - создаем ф-ции, которые будем передавать кнопкам, а внутри этих ф-ций
  // мы должны вызывать ф-цию setCounter, в которой пропишем логику изменения состояния
  const onMinusClick = () => {
    // Мы можем использовать ф-цию setCounter 2-мя способами
    // 1 - просто передавая новое значение*(если новое значение не зависит от предыдущего)
    // 2 - передавать ф-цию callback, внутри которой мы можем получить предыдущее состояние, изменить его, !вернуть его
    // 1 - setCounter(counter++)
    setCounter((prevState) => prevState - 1);
  };

  const onPlusClick = () => {
    setCounter((prevState) => prevState + 1);
  };

  return (
    <div className="counter-wrapper">
      <div className="button-wrapper">
        <Button name="-" onClick={onMinusClick} />
      </div>
      <div className="result-container">{counter}</div>
      <div className="button-wrapper">
        <Button name="+" onClick={onPlusClick} />
      </div>
    </div>
  );
}

export default Counter;
