interface PersonListProps {
  nameList: {
    first: string;
    last: string;
  }[];
}

export const PersonList = (props: PersonListProps) => {
  const { nameList } = props;

  return (
    <div>
      {nameList.map((name) => (
        <h2 key={name.first}>
          {name.first} {name.last}
        </h2>
      ))}
    </div>
  );
};
