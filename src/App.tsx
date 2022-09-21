import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

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
  return (
    <div className="App">
      <Greet name="Abhi" nature={true} />
      <PhoneNumber num={12345} />
      <Person names={allNames} employee={employee} />
      <PersonList nameList={nameList} />
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
