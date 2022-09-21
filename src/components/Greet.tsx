interface GreetProps {
  name: string;
}

export const Greet = (props: GreetProps) => {
  const { name } = props;
  return <div>Hello {name}, What's up?</div>;
};
