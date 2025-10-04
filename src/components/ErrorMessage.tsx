interface GreetingError {
  error: any;
}

const ErrorMessage = ({ error }: GreetingError) => {
  return <p className="text-center text-red-500">{error}</p>;
};

export default ErrorMessage;
