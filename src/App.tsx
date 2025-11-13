import GlobalStyles from "styles/GlobalStyles";

// Импорты лекций
// import Lesson06 from "lessons/Lesson06/Lesson06";
// import Lesson07 from "lessons/Lesson07/Lesson07";
// import Lesson08 from "lessons/Lesson08/Lesson08";
// import Lesson09 from "lessons/Lesson09/Lesson09";
// import Lesson10 from "lessons/Lesson10/Lesson10";
import Lesson12 from "lessons/Lesson12/Lesson12";


// Импорты домашних работ

function App() {
  return (
    <>
      <GlobalStyles />
      {/* Лекция 6 - TypeScript */}
      {/* <Lesson06 /> */}

      {/* Лекция 7 - TypeScript: object types*/}
      {/* <Lesson07 /> */}

      {/* Лекция 8 - Styling components*/}
      {/* <Lesson08/> */}

      {/* Лекция 9 - Styling components, control components*/}
      {/* <Lesson09 /> */}

      {/* Лекция 10 - useEffect*/}
      {/* <Lesson10 /> */}

      {/* Лекция 12 - Formik*/}
      <Lesson12 />
    </>
  );
}

export default App;
