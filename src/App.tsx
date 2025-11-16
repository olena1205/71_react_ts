import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";
import Layout from "components/Layout/Layout";
import Home from "pages/Home/Home";
import Users from "pages/Users/Users";
import About from "pages/About/About";
import User from "pages/Users/components/User/User";

// Импорты лекций
// import Lesson06 from "lessons/Lesson06/Lesson06";
// import Lesson07 from "lessons/Lesson07/Lesson07";
// import Lesson08 from "lessons/Lesson08/Lesson08";
// import Lesson09 from "lessons/Lesson09/Lesson09";
import Lesson10 from "lessons/Lesson10/Lesson10";
// import Lesson12 from "lessons/Lesson12/Lesson12";

// Импорты домашних работ
// import Homework07 from "homeworks/Homework07/Homework07";
// import Homework09 from "homeworks/Homework09/Homework09";

function App() {
  return (
    <BrowserRouter> 
      <GlobalStyles />
      <Layout>
        {/* Routes - собирает все маршруты приложение */}
        <Routes>
          {/* Route - компонент, в который передаётся маршрут и контент */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/user" element={<User />} />
        </Routes>
      </Layout>

      {/* Лекция 6 - TypeScript */}
      {/* <Lesson06 /> */}

      {/* Лекция 7 - TypeScript: object types*/}
      {/* <Lesson07 /> */}
      {/* <Homework07 /> */}

      {/* Лекция 8 - Styling components*/}
      {/* <Lesson08/> */}

      {/* Лекция 9 - Styling components, control components*/}
      {/* <Lesson09 /> */}
      {/* <Homework09 /> */}

      {/* Лекция 10 - useEffect*/}
      <Lesson10 />

      {/* Лекция 12 - Formik*/}
      {/* <Lesson12 /> */}
    </BrowserRouter>
  );
  
}

export default App;
