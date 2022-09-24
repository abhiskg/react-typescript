import { useEffect, useState } from "react";
import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Students } from "./components/Students/Students";

const nameList = [
  {
    first: "Rubel",
    last: "Hossen",
  },
  {
    first: "Sakib",
    last: "Roy",
  },
  {
    first: "Abhi",
    last: "Sen",
  },
];

const allNames = ["John", "Harry", "Rubel"];

const employee = {
  fname: "Rakib",
  salary: 5000,
};

function App() {
  const [count, setCount] = useState(55);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <h3>Count: {count}</h3>
      <button onClick={handleCount}>Increase</button>
      <Greet name="Abhi" nature={true} />
      <PhoneNumber num={12345} />
      <Person names={allNames} employee={employee} />
      <PersonList nameList={nameList} />
      <Status status="success" />
      <Students />
    </div>
  );
}

type PhoneProps = {
  num: number;
};

const PhoneNumber = (props: PhoneProps) => {
  const { num } = props;
  return <div>Your Number is {num}</div>;
};

export default App;
