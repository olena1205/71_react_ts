import "./styles.css";

function Lesson06() {
  // Типы переменных
  // Тип переменных указывается после названия через двоеточие
  // 1. Типизация строк - string
  let userName: string = "Mary";
  userName = `Tom`;
  //   userName = true;
  let result: string = 1 + 2 + "4";

  // 2. Типизация чисел - number
  let simpleNumber: number = 23;
  simpleNumber = Infinity;
  simpleNumber = 2.6;
  simpleNumber = -2;
  simpleNumber = NaN;

  // 3. Типизация логического типа - boolean
  let isAdmin: boolean = true;
  isAdmin = false;
  isAdmin = userName != "Bob";

  // 4. Типизация неопределенного типа - undefined
  let age: undefined = undefined;

  // 5. Типизация пустого типа -null
  let data: null = null;

  // 6. Типизация большого чиисла - bigInt
  let bigNumber: bigint = 1215154456878454484884656646646464n;

  // 7. Типизация символа - symbol
  let uniq: symbol = Symbol("description");

  // 8.1 Типизация массива - указываем после названия массива тип данных, которые
  // будут храниться в массиве, а затем ставим квадратные скобки
  const colors: string[] = ["red", "blue", "green"];
  //   colors.push(65789);

  // Для типизации массива постоянной длины(можно с разными типами) можно
  // использовать кортеж(tupel)
  const colorCode: [string, number] = ["blue", 674];

  // 8.2 Типизация функций
  // Если ф-ция ничего не возвращает
  const showMessage = (): void => {
    console.log("Hello");
  };

  // Если ф-ция возвращает значение, тогда просто прописываем его тип
  const getSum = (): number => {
    const sum: number = 2 + 7;
    return sum;
  };

  // Типизация параметров ф-ции
  const getUserData = (firstName: string, age: number): string => {
    return `${firstName} - ${age} y.o.`;
  };

  // 9. Автоматическое определение типов
  let name = "Bob";
  //   name = true;

  const number = [4, 5, 6];
  //   number.push("89");

  // 10. Union типы
  let color: string | number = 78;
  color = "blue";

  const example: (string | number)[] = [34, "green", 67];

  return (
    <div className="lesson06-wrapper">
      <div>Lesson06 - TypeScript</div>
      {getUserData("Tom", 39)}
    </div>
  );
}

export default Lesson06;
