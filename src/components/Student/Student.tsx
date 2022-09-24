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
    console.log("Hello", _id);
  };
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={() => handleClick(_id)}>Click button</button>
    </div>
  );
};
