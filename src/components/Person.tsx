interface PersonProps {
  names: string[];
  employee: {
    fname: string;
    salary: number;
  };
}

export const Person = (props: PersonProps) => {
  const { names, employee } = props;
  return (
    <div>
      {names.map((name) => (
        <li key={name}>{name}</li>
      ))}
      <div>
        Name: {employee.fname} Salary: {employee.salary}
      </div>
    </div>
  );
};
