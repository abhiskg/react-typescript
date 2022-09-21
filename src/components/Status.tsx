interface TypeProps {
  status: "loading" | "success" | "error";
}

export const Status = (props: TypeProps) => {
  const { status } = props;
  let message;
  if (status === "loading") {
    message = "Loading...";
  } else if (status === "success") {
    message = "Data Fetch SuccessFully";
  } else if (status === "error") {
    message = "Error fetching data";
  }
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};
