import "./styles.css";

function Lesson07() {
  // Тип any - любой тип
  let city: any = "Berlin";
  city = 25;
  city = true;
  city = [34, "London", null, false];

  // Типизация объектов через interface
  interface User {
    name: string;
    age: number;
    // знак вопроса указывает на то, что свойство необязательное
    isAdmin?: boolean;
  }

  const userData: User = {
    name: "John",
    age: 43,
    // isAdmin: true,
  };

  interface Address {
    city: string;
    postcode: string | number;
  }

  const address1: Address = {
    city: "Paris",
    postcode: 12345,
    street: "Main street",
  };
  const address2: Address = {
    city: "London",
    postcode: "356643",
    street: "Main street",
  };

  // Создание одноименных интерфейсов - интерфейс с таким же именем не будет отдельным
  // интерфейсом, он просто будет дополнять предыдущий
  interface Address {
    street: string;
  }

  // Наследование интерфейсов
  interface Person {
    fullName: string;
    email: string;
  }

  interface Admin extends Person {
    adminId: number;
  }

  const personData: Person = {
    fullName: "Adam Smith",
    email: "adam@gmail.com",
  };

  const adminData: Admin = {
    fullName: "John Johnson",
    email: "john@gmail.com",
    adminId: 2145,
  };

  // Типизация через type
  // Использование type для создания усложненного типа для переменных
  type Weight = string | number | null;
  let personWeight: Weight = "56kg";
  let userWeight: Weight = null;
  userWeight = 45;

  // Использование type для типизации объектов
  type Animal = {
    name: string;
    weight: Weight;
  };

  const animalData: Animal = {
    name: "Lion",
    weight: "200 kg",
  };

  // Одноименные типы (type) создавать нельзя
  //   type Animal = string;

  // Объединение типов
  type zooAnimal = Animal & { country: string };

  const zebra: zooAnimal = {
    country: "Afrika",
    name: "zebra",
    weight: null,
  };

  // Generic - это переменная, в которую мы можем подставить нужный тип в момент использования
  // Generic & type
  type customTupel<T = string> = [number, string, T];

  const arrayMix: customTupel<boolean> = [24, "Bob", false];
  const arrayMix2: customTupel<number> = [40, "Mary", 2445];
  const arrayMix3: customTupel = [56, "Tom", "Berlin"];

  // Generic & Interface
  interface Fruit<T = number> {
    title: string;
    address: T;
  }

  const fruit1: Fruit = {
    title: "Apple",
    address: 45,
  };

  const fruit2: Fruit<string> = {
    title: "Grape",
    address: "4355",
  };

  // enum
  // Числовое перечисление
  //   enum Colors {
  //     Red, // 0
  //     Black, // 1
  //     Green, // 2
  //   }

  enum Colors {
    Red = 5,
    Black, // 6
    Green, // 7
  }

  let currentColor: Colors = Colors.Green;

  console.log(currentColor);

  // Строковое перечисление
  // enum для цветов светофора
  enum TRAFFIC_LIGHT {
    RED = "red",
    YELLOW = "yellow",
    GREEN = "green",
  }

  const getAction = (light: TRAFFIC_LIGHT) => {
    switch (light) {
      case TRAFFIC_LIGHT.RED:
        return "Стоп!";
      case TRAFFIC_LIGHT.YELLOW:
        return "Приготовьтесь идти";
      case TRAFFIC_LIGHT.GREEN:
        return "Можно идти";
    }
  };

  // --------------Задача
  interface Users {
    id: number;
    name: string;
  }

  const arrayUsers: Users[] = [
    { id: 1, name: "Tom" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Mary" },
  ];

  return (
    <div className="lesson07-wrapper">{getAction(TRAFFIC_LIGHT.GREEN)}</div>
  );
}

export default Lesson07;
