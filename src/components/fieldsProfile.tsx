interface GreetingProps {
  name: string;
  surname: string;
  email: string;
}

const Greeting: React.FC<GreetingProps> = (props) => {
  return (
    <>
      <h1>
        {props.name} {props.surname}
      </h1>
      <h1>
        {props.email}
      </h1>
    </>
  );
};

export default Greeting;
