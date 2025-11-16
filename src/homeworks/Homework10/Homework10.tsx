import { type ChangeEvent, useEffect, useState } from "react";
import axios from "axios";

import Input from "components/Input/Input";
import {
  DataContainer,
  ErrorMessage,
  Homework10Wrapper,
  InputsWrapper,
} from "./styles";
import Spinner from "components/Spinner/Spinner";

function Homework10() {
  const [search, setSearch] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [fact, setFact] = useState<string>("");
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);

  const CAT_URL = "https://catfact.ninja/fact";

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onNoteChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const getCatFact = async () => {
    setIsLoading(true);
    setError(undefined);
    setFact("");

    try {
      const result = await axios.get(CAT_URL);
      setFact(result.data.fact);
    } catch (error: any) {
      console.log(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  useEffect(() => {
    if (!isFirstRender) {
      getCatFact();
    }
  }, [search]);

  return (
    <Homework10Wrapper>
      <InputsWrapper>
        <Input
          name="search"
          placeholder="Enter value"
          value={search}
          onChange={onSearchChange}
        />
        <Input
          name="note"
          placeholder="Enter note"
          value={note}
          onChange={onNoteChange}
        />
      </InputsWrapper>
      {fact && <DataContainer>{fact}</DataContainer>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {isLoading && <Spinner />}
    </Homework10Wrapper>
  );
}

export default Homework10;
