import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { LoginFormComponent, Title } from "./styles";
import type { LoginFormValues } from "./types";

function LoginForm() {
  // ----Создание валидационной схемы с помощью Yup
  const shema = Yup.object().shape({
    email: Yup.string()
      .required("Field email is required")
      .email("Field has type email")
      .max(20, "Max 20 symbols")
      .min(10, "Min 10 symbols")
      .typeError("Email must be string"),
    password: Yup.number()
      .required("Field password is required")
      .test(
        "Check max",
        "Max 20 symbols",
        (value) => String(value).length <= 20
      )
      .typeError("Password must be numbers"),
  });

  // --- Настройка формы через Formik
  // Для контроля формы через формик нужно использовать хук из Formik, который
  // называется useFormik. Хук useFormik принимает в качестве аргумента объект с
  // настройками формы и возвращает объект с помощью которого мы можем контроливать
  // определённую форму
  const formik = useFormik({
    // в объекте есть два обязательных свойства initialValues и onSubmit
    // initialValues содержит объект, у которого ключами являются значения name из полей формы,
    // а значениями свойств - первоначальные значения, которые должны быть в полях
    initialValues: {
      email: "",
      password: "",
    } as LoginFormValues,
    // Добавление валидационной схемы
    validationSchema: shema,
    validateOnChange: false,
    // onSubmit должно содержать функцию, которая будет вызвана тогда, когда произойдёт submit формы
    // в первом параметре этой функции мы получаем доступ к актуальным значениям из полей
    onSubmit: (values: LoginFormValues): void => {
      console.log(values);
    },
  });

  console.log(formik);

  return (
    <LoginFormComponent onSubmit={formik.handleSubmit}>
      <Title>Login form</Title>
      <Input
        name="email"
        label="Email*"
        placeholder="Enter your email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Input
        name="password"
        label="Password"
        placeholder="Enter your password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Button type="submit" name="Login" />
    </LoginFormComponent>
  );
}

export default LoginForm;
