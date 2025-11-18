import { useState } from "react";

import Section from "../Section/Section";
import { MainCardTitle, MainCardWrapper } from "./styles";
import type { MainCardContextType, UserData } from "./types";
import { createContext } from "react";

// Шаг 1. Создаем хранилище- контекст, с помощью ф-ции createContext,
// которую нужно импортировать
// export const MainCardContext = createContext<undefined | UserData>(undefined);
export const MainCardContext = createContext<MainCardContextType>({
  data: undefined,
  onDataChange: () => {},
});

function MainCard() {
  const [userData, setUserData] = useState<UserData | undefined>({
    firstName: "Bart",
    lastName: "Simpson",
    age: 11,
  });

  return (
    // Шаг 2. Создаем обёртку, которая позволяет положить свои значения в контекст
    // и затем предоставляет к ним доступ всем вложенным компонентам
    // <MainCardContext.Provider value={userData}>
    <MainCardContext.Provider
      value={{
        data: userData,
        onDataChange: setUserData,
      }}
    >
      <MainCardWrapper>
        <MainCardTitle>Main Card</MainCardTitle>
        <Section />
      </MainCardWrapper>
    </MainCardContext.Provider>
  );
}

export default MainCard;
