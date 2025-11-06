import { useState } from "react";

import "./styles.css";
import Button from "components/Button/Button";

function Counter() {
  const [counter, setCounter] = useState<number>(0);

  const onMinusClick = (): void => {
    setCounter((prevState) => prevState - 1);
  };

  const onPlusClick = (): void => {
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
