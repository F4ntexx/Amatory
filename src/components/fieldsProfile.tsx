interface GreetingProps {
  name: string;
  surname: string;
  email: string;
}

const Greeting: React.FC<GreetingProps> = (props) => {
  return (
    <>
      <div>
        <h1>Personal name</h1>
        <h1 className="font-meduim text-2xl">
          {props.name} {props.surname}
        </h1>
      </div>
      <div>
        <h1>Email</h1>
        <h1>{props.email}</h1>
      </div>
    </>
  );
};

export default Greeting;
