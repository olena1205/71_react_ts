import { useState, type ChangeEvent } from "react";

import Input from "components/Input/Input";
import {
  FormWrapper,
  Homework09Wrapper,
  Result,
  ResultWrapper,
} from "./styles";
import Button from "components/Button/Button";

function Homework09() {
  const [firstNote, setFirstNote] = useState<string>("");
  const [secondNote, setSecondNote] = useState<string>("");
  const [firstResult, setFirstResult] = useState<string>("");
  const [secondResult, setSecondResult] = useState<string>("");
  const [isShowResult, setIsShowResult] = useState<boolean>(false);

  //   отправка запроса
  console.log("fetch data ");

  const firstNoteOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstNote(event.target.value);
  };

  const secondNoteOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSecondNote(event.target.value);
  };

  const showResult = () => {
    setFirstResult(firstNote);
    setSecondResult(secondNote);

    setIsShowResult(!isShowResult);
    // !false -> true
    // !true -> false
  };

  return (
    <Homework09Wrapper>
      <FormWrapper>
        <Input
          name="first-note"
          placeholder="Enter first note"
          label="First note"
          id="first-note-id"
          value={firstNote}
          onChange={firstNoteOnChange}
        />
        <Input
          name="second-note"
          placeholder="Enter second note"
          label="Second note"
          id="second-note-id"
          value={secondNote}
          onChange={secondNoteOnChange}
        />
        <Button name="SHOW/HIDE" onClick={showResult} />
      </FormWrapper>
      {/* {isShowResult && (
        <ResultWrapper>
          <Result>{firstResult}</Result>
          <Result>{secondResult}</Result>
        </ResultWrapper>
      )} */}
      <ResultWrapper isShow={isShowResult}>
        <Result>{firstResult ? firstResult : "-"}</Result>
        <Result>{secondResult ? secondResult : "-"}</Result>
      </ResultWrapper>
    </Homework09Wrapper>
  );
}

export default Homework09;
