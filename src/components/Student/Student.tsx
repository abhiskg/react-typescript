import { addToDb, removeFromDb } from "../utils/fakedb";

interface StudentProps {
  student: {
    _id: string;
    age: number;
    name: string;
    gender: string;
    company: string;
  };
}

export const Student = (props: StudentProps) => {
  const { _id, name } = props.student;

  const handleClick = (_id: string) => {
    // console.log("Hello", _id);
    addToDb(_id);
  };

  const handleClickRemove = (_id: string) => {
    removeFromDb(_id);
  };
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={() => handleClick(_id)}>Add To Cart</button>
      <button onClick={() => handleClickRemove(_id)}>Remove</button>
    </div>
  );
};
