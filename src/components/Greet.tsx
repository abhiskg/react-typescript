interface GreetProps {
  name: string;
  nature: boolean;
}

export const Greet = (props: GreetProps) => {
  const { name, nature } = props;
  return (
    <>
      <div>Hello {name}, What's up?</div>
      <div>You are {nature} in nature</div>
    </>
  );
};
